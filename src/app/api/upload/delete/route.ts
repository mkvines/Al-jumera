import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import path from "path";
import fs from "fs";

export async function POST(request: Request) {
  try {
    const authenticated = await getSession();
    if (!authenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { url } = await request.json();
    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // Vercel Blob URLs
    if (url.includes("vercel-storage.com") || url.includes("blob.vercel-storage")) {
      const { del } = await import("@vercel/blob");
      await del(url);
    }
    // Local upload files
    else if (url.startsWith("/uploads/")) {
      const filepath = path.join(process.cwd(), "public", url);
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete failed:", error);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}

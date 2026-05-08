import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import path from "path";
import fs from "fs";

const MAX_FILE_SIZE = 100 * 1024; // 100KB

function hasBlobStorage(): boolean {
  return !!process.env.BLOB_READ_WRITE_TOKEN;
}

export async function POST(request: Request) {
  try {
    const authenticated = await getSession();
    if (!authenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const files = formData.getAll("files") as File[];

    if (!files || files.length === 0) {
      return NextResponse.json({ error: "No files provided" }, { status: 400 });
    }

    const errors: string[] = [];
    const uploadedUrls: string[] = [];

    for (const file of files) {
      if (file.size > MAX_FILE_SIZE) {
        errors.push(`"${file.name}" exceeds 100KB (${Math.round(file.size / 1024)}KB)`);
        continue;
      }

      if (!file.type.startsWith("image/")) {
        errors.push(`"${file.name}" is not an image file`);
        continue;
      }

      if (hasBlobStorage()) {
        // Use Vercel Blob in production
        const { put } = await import("@vercel/blob");
        const timestamp = Date.now();
        const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
        const filename = `projects/${timestamp}-${safeName}`;

        const blob = await put(filename, file, {
          access: "public",
          addRandomSuffix: false,
        });

        uploadedUrls.push(blob.url);
      } else {
        // Local file storage for development
        const uploadsDir = path.join(process.cwd(), "public", "uploads", "projects");
        if (!fs.existsSync(uploadsDir)) {
          fs.mkdirSync(uploadsDir, { recursive: true });
        }

        const timestamp = Date.now();
        const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
        const filename = `${timestamp}-${safeName}`;
        const filepath = path.join(uploadsDir, filename);

        const buffer = Buffer.from(await file.arrayBuffer());
        fs.writeFileSync(filepath, buffer);

        uploadedUrls.push(`/uploads/projects/${filename}`);
      }
    }

    if (errors.length > 0 && uploadedUrls.length === 0) {
      return NextResponse.json(
        { error: "Please select images up to 100KB each.", details: errors },
        { status: 400 }
      );
    }

    return NextResponse.json({
      data: uploadedUrls,
      ...(errors.length > 0 && { warnings: errors }),
    });
  } catch (error) {
    console.error("Upload failed:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}

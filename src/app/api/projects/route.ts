import { NextResponse } from "next/server";
import { getAllProjects, createProject } from "@/lib/db";
import { getSession } from "@/lib/auth";
import { fallbackProjects } from "@/data/projects";

export async function GET() {
  try {
    if (!process.env.DATABASE_URL) {
      // Try local JSON first, then fallback to static
      try {
        const projects = await getAllProjects();
        if (projects && projects.length > 0) {
          return NextResponse.json({ data: projects });
        }
      } catch {
        // Local JSON failed, use static fallback
      }
      return NextResponse.json({ data: fallbackProjects });
    }
    const projects = await getAllProjects();
    return NextResponse.json({ data: projects });
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return NextResponse.json({ data: fallbackProjects });
  }
}

export async function POST(request: Request) {
  try {
    const authenticated = await getSession();
    if (!authenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { title, location, scope, tags, image, images, featured } = body;

    if (!title || !location || !scope) {
      return NextResponse.json({ error: "Title, location, and scope are required" }, { status: 400 });
    }

    const id = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 60)
      + "-" + Date.now().toString(36);

    const project = await createProject({
      id,
      title,
      location,
      scope,
      tags: tags || [],
      image: image || (images && images.length > 0 ? images[0] : ""),
      images: images || [],
      featured: featured || false,
    });

    return NextResponse.json({ data: project }, { status: 201 });
  } catch (error) {
    console.error("Failed to create project:", error);
    return NextResponse.json({ error: "Failed to create project: " + String(error) }, { status: 500 });
  }
}

import { getAllProjects } from "@/lib/db";
import { fallbackProjects } from "@/data/projects";
import type { Project } from "@/types/project";
import HomePageClient from "./HomePageClient";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let projects: Project[];
  try {
    projects = await getAllProjects();
    if (!projects || projects.length === 0) {
      projects = fallbackProjects;
    }
  } catch {
    projects = fallbackProjects;
  }

  return <HomePageClient projects={projects} />;
}

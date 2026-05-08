import { getAllProjects } from "@/lib/db";
import { fallbackProjects } from "@/data/projects";
import type { Project } from "@/types/project";
import ProjectsPageClient from "./ProjectsPageClient";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  let projects: Project[];
  try {
    projects = await getAllProjects();
    if (!projects || projects.length === 0) {
      projects = fallbackProjects;
    }
  } catch {
    projects = fallbackProjects;
  }

  return <ProjectsPageClient projects={projects} />;
}

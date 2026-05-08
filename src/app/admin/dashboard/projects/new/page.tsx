"use client";

import { useRouter } from "next/navigation";
import ProjectForm from "@/components/admin/ProjectForm";

export default function NewProjectPage() {
  const router = useRouter();

  async function handleSubmit(data: {
    title: string;
    location: string;
    scope: string;
    tags: string[];
    images: string[];
    featured: boolean;
  }) {
    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        image: data.images[0] || "",
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Failed to create project");
    }

    router.push("/admin/dashboard/projects");
  }

  return (
    <>
      <div className="admin-topbar">
        <h1>Create New Project</h1>
      </div>
      <div className="form-card">
        <ProjectForm
          onSubmit={handleSubmit}
          submitLabel="Create Project"
          onCancel={() => router.push("/admin/dashboard/projects")}
        />
      </div>
    </>
  );
}

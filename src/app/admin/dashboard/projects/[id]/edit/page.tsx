"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import ProjectForm from "@/components/admin/ProjectForm";

export default function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const [project, setProject] = useState<{
    title: string;
    location: string;
    scope: string;
    tags: string[];
    images: string[];
    featured: boolean;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/api/projects/${id}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.error) {
          setError(d.error);
        } else {
          setProject(d.data);
        }
      })
      .catch(() => setError("Failed to load project"))
      .finally(() => setLoading(false));
  }, [id]);

  async function handleSubmit(data: {
    title: string;
    location: string;
    scope: string;
    tags: string[];
    images: string[];
    featured: boolean;
  }) {
    const res = await fetch(`/api/projects/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        image: data.images[0] || "",
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Failed to update project");
    }

    router.push("/admin/dashboard/projects");
  }

  if (loading) {
    return (
      <>
        <div className="admin-topbar"><h1>Edit Project</h1></div>
        <div className="form-card" style={{ textAlign: "center", padding: "3rem", color: "#6b7280" }}>
          Loading project...
        </div>
      </>
    );
  }

  if (error || !project) {
    return (
      <>
        <div className="admin-topbar"><h1>Edit Project</h1></div>
        <div className="admin-error">{error || "Project not found"}</div>
      </>
    );
  }

  return (
    <>
      <div className="admin-topbar">
        <h1>Edit Project</h1>
      </div>
      <div className="form-card">
        <ProjectForm
          initialData={project}
          onSubmit={handleSubmit}
          submitLabel="Save Changes"
          onCancel={() => router.push("/admin/dashboard/projects")}
        />
      </div>
    </>
  );
}

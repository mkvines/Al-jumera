"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import DeleteModal from "@/components/admin/DeleteModal";

interface Project {
  id: string;
  title: string;
  location: string;
  scope: string;
  tags: string[];
  image: string;
  images: string[];
  featured: boolean;
}

export default function ProjectsListPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<Project | null>(null);
  const [deleting, setDeleting] = useState(false);

  function fetchProjects() {
    setLoading(true);
    fetch("/api/projects")
      .then((r) => r.json())
      .then((d) => setProjects(d.data || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }

  useEffect(() => { fetchProjects(); }, []);

  async function handleDelete() {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await fetch(`/api/projects/${deleteTarget.id}`, { method: "DELETE" });
      setDeleteTarget(null);
      fetchProjects();
    } catch {
      // ignore
    } finally {
      setDeleting(false);
    }
  }

  const filtered = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="admin-topbar">
        <h1>Projects</h1>
        <Link href="/admin/dashboard/projects/new" className="btn-admin-primary" style={{ width: "auto", textDecoration: "none" }}>
          <Plus size={18} />
          New Project
        </Link>
      </div>

      {/* Search */}
      <div style={{ marginBottom: "1.25rem", position: "relative", maxWidth: "360px" }}>
        <Search size={16} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} />
        <input
          className="admin-input"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ paddingLeft: "36px" }}
        />
      </div>

      {loading ? (
        <div className="form-card" style={{ textAlign: "center", padding: "3rem", color: "#6b7280" }}>
          Loading projects...
        </div>
      ) : filtered.length === 0 ? (
        <div className="form-card" style={{ textAlign: "center", padding: "3rem", color: "#6b7280" }}>
          {search ? "No projects match your search." : "No projects yet. Create your first one!"}
        </div>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Project</th>
                <th>Location</th>
                <th>Tags</th>
                <th>Status</th>
                <th style={{ textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((project) => (
                <tr key={project.id}>
                  <td>
                    <img
                      src={project.image || project.images?.[0] || "/images/og-image.png"}
                      alt={project.title}
                      className="project-thumb"
                    />
                  </td>
                  <td>
                    <div className="project-title">{project.title}</div>
                    <div style={{ fontSize: "0.75rem", color: "#9ca3af", marginTop: "2px" }}>
                      {project.images?.length || 0} image{(project.images?.length || 0) !== 1 ? "s" : ""}
                    </div>
                  </td>
                  <td>{project.location}</td>
                  <td>
                    <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="badge-tag">{tag}</span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="badge-tag">+{project.tags.length - 3}</span>
                      )}
                    </div>
                  </td>
                  <td>
                    {project.featured && <span className="badge-featured">★ Featured</span>}
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
                      <Link
                        href={`/admin/dashboard/projects/${project.id}/edit`}
                        className="btn-admin-secondary"
                        style={{ textDecoration: "none", padding: "0.5rem 0.75rem" }}
                      >
                        <Pencil size={14} />
                      </Link>
                      <button
                        className="btn-admin-danger"
                        style={{ padding: "0.5rem 0.75rem" }}
                        onClick={() => setDeleteTarget(project)}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {deleteTarget && (
        <DeleteModal
          title="Delete Project"
          message={`Are you sure you want to delete "${deleteTarget.title}"? This action cannot be undone.`}
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
          loading={deleting}
        />
      )}
    </>
  );
}

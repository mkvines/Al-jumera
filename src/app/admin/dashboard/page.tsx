"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FolderKanban, Star, Plus } from "lucide-react";

export default function DashboardHome() {
  const [stats, setStats] = useState({ total: 0, featured: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((d) => {
        const projects = d.data || [];
        setStats({
          total: projects.length,
          featured: projects.filter((p: { featured: boolean }) => p.featured).length,
        });
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="admin-topbar">
        <h1>Dashboard</h1>
        <Link href="/admin/dashboard/projects/new" className="btn-admin-primary" style={{ width: "auto", textDecoration: "none" }}>
          <Plus size={18} />
          New Project
        </Link>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ background: "#f5f3ff" }}>
            <FolderKanban size={20} style={{ color: "#6B46FF" }} />
          </div>
          <div className="stat-value">{loading ? "—" : stats.total}</div>
          <div className="stat-label">Total Projects</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: "#f0fdf4" }}>
            <Star size={20} style={{ color: "#16a34a" }} />
          </div>
          <div className="stat-value">{loading ? "—" : stats.featured}</div>
          <div className="stat-label">Featured Projects</div>
        </div>
      </div>

      <div className="form-card">
        <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#1a1a2e", marginBottom: "0.5rem" }}>
          Quick Start
        </h3>
        <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "1rem", lineHeight: 1.6 }}>
          Manage your website projects from here. Add new projects, edit existing ones, upload images, and control what appears on your live website.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <Link href="/admin/dashboard/projects" className="btn-admin-secondary" style={{ textDecoration: "none" }}>
            <FolderKanban size={16} />
            View All Projects
          </Link>
          <Link href="/admin/dashboard/projects/new" className="btn-admin-secondary" style={{ textDecoration: "none" }}>
            <Plus size={16} />
            Add New Project
          </Link>
        </div>
      </div>
    </>
  );
}

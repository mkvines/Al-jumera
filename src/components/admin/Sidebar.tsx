"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { LayoutDashboard, FolderKanban, Globe, LogOut, Menu, X } from "lucide-react";

const links = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Projects", href: "/admin/dashboard/projects", icon: FolderKanban },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin");
  }

  const isActive = (href: string) => {
    if (href === "/admin/dashboard") return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay */}
      <div
        className={`sidebar-overlay ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`admin-sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-brand">
          <h2>AL-JUMERAH ITQAN</h2>
          <p>Admin Dashboard</p>
        </div>

        <nav className="sidebar-nav">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`sidebar-link ${isActive(link.href) ? "active" : ""}`}
                onClick={() => setOpen(false)}
              >
                <Icon size={18} />
                {link.label}
              </Link>
            );
          })}

          <div style={{ flex: 1 }} />

          <Link
            href="/"
            className="sidebar-link"
            target="_blank"
            onClick={() => setOpen(false)}
          >
            <Globe size={18} />
            View Website
          </Link>
        </nav>

        <div className="sidebar-footer">
          <button
            onClick={handleLogout}
            className="sidebar-link"
            style={{ width: "100%", border: "none", background: "none", cursor: "pointer", textAlign: "left" }}
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
}

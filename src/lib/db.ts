import { neon } from "@neondatabase/serverless";
import path from "path";
import fs from "fs";
import type { Project } from "@/types/project";

export type { Project };

// ─── Check if database is configured ───
function hasDatabase(): boolean {
  return !!process.env.DATABASE_URL;
}

function getDb() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) throw new Error("DATABASE_URL is not set");
  return neon(databaseUrl);
}

interface ProjectRow {
  id: string;
  title: string;
  location: string;
  scope: string;
  tags: string;
  image: string;
  images: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

function rowToProject(row: ProjectRow): Project {
  return {
    id: row.id,
    title: row.title,
    location: row.location,
    scope: row.scope,
    tags: JSON.parse(row.tags || "[]"),
    image: row.image,
    images: JSON.parse(row.images || "[]"),
    featured: row.featured,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

// ─── Local JSON File Storage (fallback for local dev) ───
const LOCAL_DB_PATH = path.join(process.cwd(), "data", "projects.json");

function ensureLocalDb(): Project[] {
  const dir = path.dirname(LOCAL_DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(LOCAL_DB_PATH)) {
    fs.writeFileSync(LOCAL_DB_PATH, "[]", "utf-8");
  }
  try {
    const raw = fs.readFileSync(LOCAL_DB_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveLocalDb(projects: Project[]) {
  const dir = path.dirname(LOCAL_DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify(projects, null, 2), "utf-8");
}

// ─── Database setup (Neon only) ───
export async function setupDatabase() {
  const sql = getDb();
  await sql`
    CREATE TABLE IF NOT EXISTS projects (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      location TEXT NOT NULL,
      scope TEXT NOT NULL,
      tags TEXT NOT NULL DEFAULT '[]',
      image TEXT NOT NULL DEFAULT '',
      images TEXT NOT NULL DEFAULT '[]',
      featured BOOLEAN NOT NULL DEFAULT false,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
}

// ─── CRUD Operations ───
export async function getAllProjects(): Promise<Project[]> {
  if (!hasDatabase()) {
    return ensureLocalDb();
  }
  const sql = getDb();
  const rows = (await sql`SELECT * FROM projects ORDER BY created_at DESC`) as unknown as ProjectRow[];
  return rows.map(rowToProject);
}

export async function getProjectById(id: string): Promise<Project | null> {
  if (!hasDatabase()) {
    const projects = ensureLocalDb();
    return projects.find((p) => p.id === id) || null;
  }
  const sql = getDb();
  const rows = (await sql`SELECT * FROM projects WHERE id = ${id}`) as unknown as ProjectRow[];
  return rows.length > 0 ? rowToProject(rows[0]) : null;
}

export async function createProject(data: {
  id: string;
  title: string;
  location: string;
  scope: string;
  tags: string[];
  image: string;
  images: string[];
  featured: boolean;
}): Promise<Project> {
  const now = new Date().toISOString();
  const project: Project = {
    ...data,
    createdAt: now,
    updatedAt: now,
  };

  if (!hasDatabase()) {
    const projects = ensureLocalDb();
    projects.unshift(project);
    saveLocalDb(projects);
    return project;
  }

  const sql = getDb();
  const tagsJson = JSON.stringify(data.tags);
  const imagesJson = JSON.stringify(data.images);
  const rows = (await sql`
    INSERT INTO projects (id, title, location, scope, tags, image, images, featured)
    VALUES (${data.id}, ${data.title}, ${data.location}, ${data.scope}, ${tagsJson}, ${data.image}, ${imagesJson}, ${data.featured})
    RETURNING *
  `) as unknown as ProjectRow[];
  return rowToProject(rows[0]);
}

export async function updateProject(
  id: string,
  data: {
    title?: string;
    location?: string;
    scope?: string;
    tags?: string[];
    image?: string;
    images?: string[];
    featured?: boolean;
  }
): Promise<Project | null> {
  if (!hasDatabase()) {
    const projects = ensureLocalDb();
    const index = projects.findIndex((p) => p.id === id);
    if (index === -1) return null;
    const existing = projects[index];
    const updated: Project = {
      ...existing,
      title: data.title ?? existing.title,
      location: data.location ?? existing.location,
      scope: data.scope ?? existing.scope,
      tags: data.tags ?? existing.tags,
      image: data.image ?? existing.image,
      images: data.images ?? existing.images,
      featured: data.featured ?? existing.featured,
      updatedAt: new Date().toISOString(),
    };
    projects[index] = updated;
    saveLocalDb(projects);
    return updated;
  }

  const sql = getDb();
  const existing = await getProjectById(id);
  if (!existing) return null;

  const title = data.title ?? existing.title;
  const location = data.location ?? existing.location;
  const scope = data.scope ?? existing.scope;
  const tags = JSON.stringify(data.tags ?? existing.tags);
  const image = data.image ?? existing.image;
  const images = JSON.stringify(data.images ?? existing.images);
  const featured = data.featured ?? existing.featured;

  const rows = (await sql`
    UPDATE projects
    SET title = ${title}, location = ${location}, scope = ${scope},
        tags = ${tags}, image = ${image}, images = ${images},
        featured = ${featured}, updated_at = NOW()
    WHERE id = ${id}
    RETURNING *
  `) as unknown as ProjectRow[];
  return rows.length > 0 ? rowToProject(rows[0]) : null;
}

export async function deleteProject(id: string): Promise<boolean> {
  if (!hasDatabase()) {
    const projects = ensureLocalDb();
    const index = projects.findIndex((p) => p.id === id);
    if (index === -1) return false;
    projects.splice(index, 1);
    saveLocalDb(projects);
    return true;
  }

  const sql = getDb();
  const rows = (await sql`DELETE FROM projects WHERE id = ${id} RETURNING id`) as unknown as ProjectRow[];
  return rows.length > 0;
}

export async function getProjectCount(): Promise<number> {
  if (!hasDatabase()) {
    return ensureLocalDb().length;
  }
  const sql = getDb();
  const rows = (await sql`SELECT COUNT(*) as count FROM projects`) as unknown as Array<{ count: string }>;
  return parseInt(rows[0].count, 10);
}

export async function getFeaturedCount(): Promise<number> {
  if (!hasDatabase()) {
    return ensureLocalDb().filter((p) => p.featured).length;
  }
  const sql = getDb();
  const rows = (await sql`SELECT COUNT(*) as count FROM projects WHERE featured = true`) as unknown as Array<{
    count: string;
  }>;
  return parseInt(rows[0].count, 10);
}

import { NextResponse } from "next/server";
import { setupDatabase, createProject, getProjectCount } from "@/lib/db";
import { getSession } from "@/lib/auth";

// Existing projects to seed
const SEED_PROJECTS = [
  {
    id: "saib-riyadh",
    title: "Saudi Investment Bank (SAIB)",
    location: "Riyadh",
    scope: "Complete HVAC system overhaul including chillers, AHU, VAV systems, and pumps for the main headquarters.",
    tags: ["Chiller", "AHU", "VAV", "Pumps"],
    image: "/images/projects/saib.webp",
    images: ["/images/projects/saib.webp"],
    featured: true,
  },
  {
    id: "prince-fahd-palace",
    title: "Prince Fahd Bin Badr Palace",
    location: "Riyadh",
    scope: "Royal palace HVAC installation featuring package units, ducted concealed systems, and VAV controls.",
    tags: ["Package Unit", "Ducted Concealed", "VAV"],
    image: "/images/projects/palace.webp",
    images: ["/images/projects/palace.webp"],
    featured: true,
  },
  {
    id: "ips-khobar",
    title: "International Public School (IPS)",
    location: "Al Khobar",
    scope: "Full VRV system deployment with FCU and AHU installation across the entire campus.",
    tags: ["VRV", "FCU", "AHU"],
    image: "/images/projects/ips.webp",
    images: ["/images/projects/ips.webp"],
    featured: true,
  },
  {
    id: "al-dawa-warehouse",
    title: "Al Dawa Pharmacy Warehouse",
    location: "Al Sudair Industrial Area",
    scope: "Installation of VRF system, Package Units, FAHU unit, CRAC unit, and Split units for temperature-sensitive pharmaceutical storage.",
    tags: ["VRF", "Package Unit", "FAHU", "CRAC", "Split"],
    image: "/images/projects/aldawa.webp",
    images: ["/images/projects/aldawa.webp"],
    featured: false,
  },
  {
    id: "king-saud-university",
    title: "King Saud University",
    location: "Riyadh",
    scope: "Large-scale installation of package units and exhaust fan systems across university facilities.",
    tags: ["Package Unit", "Exhaust Fan"],
    image: "/images/projects/ksu.webp",
    images: ["/images/projects/ksu.webp"],
    featured: false,
  },
  {
    id: "jaguar-showroom",
    title: "Jaguar Showroom",
    location: "Riyadh",
    scope: "Premium showroom climate control with package unit installation for optimal customer comfort.",
    tags: ["Package Unit"],
    image: "/images/projects/jaguar.webp",
    images: ["/images/projects/jaguar.webp"],
    featured: false,
  },
  {
    id: "cuticles-saloon",
    title: "Cuticles Saloon",
    location: "Riyadh",
    scope: "Complete supply and installation of ductwork system for premium saloon climate control and ventilation.",
    tags: ["Ductwork", "Ventilation"],
    image: "/images/projects/cuticles.webp",
    images: ["/images/projects/cuticles.webp"],
    featured: false,
  },
  {
    id: "ejada-office",
    title: "EJADA OFFICE 6 floor building",
    location: "Saudi Arabia",
    scope: "SUPPLY AND INSTALLATION OF VRF SYSTEM (Carrier brand)",
    tags: ["VRF", "Carrier"],
    image: "/images/projects/ejadah.webp",
    images: ["/images/projects/ejadah.webp"],
    featured: false,
  },
];

export async function POST() {
  try {
    const authenticated = await getSession();
    if (!authenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Create table
    await setupDatabase();

    // Check if already seeded
    const count = await getProjectCount();
    if (count > 0) {
      return NextResponse.json({
        message: `Database already has ${count} projects. Skipping seed.`,
        seeded: false,
      });
    }

    // Seed projects
    for (const project of SEED_PROJECTS) {
      await createProject(project);
    }

    return NextResponse.json({
      message: `Successfully seeded ${SEED_PROJECTS.length} projects`,
      seeded: true,
    });
  } catch (error) {
    console.error("Setup failed:", error);
    return NextResponse.json({ error: "Setup failed: " + String(error) }, { status: 500 });
  }
}

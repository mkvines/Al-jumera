export interface Project {
    id: string;
    title: string;
    location: string;
    scope: string;
    tags: string[];
    image: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: "saib-riyadh",
        title: "Saudi Investment Bank (SAIB)",
        location: "Riyadh",
        scope:
            "Complete HVAC system overhaul including chillers, AHU, VAV systems, and pumps for the main headquarters.",
        tags: ["Chiller", "AHU", "VAV", "Pumps"],
        image: "/images/projects/saib.webp",
        featured: true,
    },
    {
        id: "prince-fahd-palace",
        title: "Prince Fahd Bin Badr Palace",
        location: "Riyadh",
        scope:
            "Royal palace HVAC installation featuring package units, ducted concealed systems, and VAV controls.",
        tags: ["Package Unit", "Ducted Concealed", "VAV"],
        image: "/images/projects/palace.webp",
        featured: true,
    },
    {
        id: "ips-khobar",
        title: "International Public School (IPS)",
        location: "Al Khobar",
        scope:
            "Full VRV system deployment with FCU and AHU installation across the entire campus.",
        tags: ["VRV", "FCU", "AHU"],
        image: "/images/projects/ips.webp",
        featured: true,
    },
    {
        id: "al-dawa-warehouse",
        title: "Al Dawa Pharmacy Warehouse",
        location: "Al Sudair Industrial Area",
        scope:
            "Installation of VRF system, Package Units, FAHU unit, CRAC unit, and Split units for temperature-sensitive pharmaceutical storage.",
        tags: ["VRF", "Package Unit", "FAHU", "CRAC", "Split"],
        image: "/images/projects/aldawa.webp",
    },
    {
        id: "king-saud-university",
        title: "King Saud University",
        location: "Riyadh",
        scope:
            "Large-scale installation of package units and exhaust fan systems across university facilities.",
        tags: ["Package Unit", "Exhaust Fan"],
        image: "/images/projects/ksu.webp",
    },
    {
        id: "jaguar-showroom",
        title: "Jaguar Showroom",
        location: "Riyadh",
        scope:
            "Premium showroom climate control with package unit installation for optimal customer comfort.",
        tags: ["Package Unit"],
        image: "/images/projects/jaguar.webp",
    },
    {
        id: "cuticles-saloon",
        title: "Cuticles Saloon",
        location: "Riyadh",
        scope:
            "Complete supply and installation of ductwork system for premium saloon climate control and ventilation.",
        tags: ["Ductwork", "Ventilation"],
        image: "/images/projects/cuticles.webp",
    },
];

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export const services: Service[] = [
    {
        id: "vrv-vrf",
        title: "VRF / VRV Systems",
        description:
            "Variable Refrigerant Flow systems for precise, zone-based climate control in multi-story and mixed-use buildings. Energy-efficient and scalable.",
        icon: "Gauge",
    },
    {
        id: "package-unit",
        title: "Package Units",
        description:
            "Self-contained packaged HVAC units for commercial and industrial applications. Turnkey installation with reliable performance in extreme temperatures.",
        icon: "Box",
    },
    {
        id: "chillers-ahu",
        title: "Chillers & AHU",
        description:
            "Air Cooled Chiller and Air Handling Unit installation, commissioning, and servicing. Custom solutions for optimal temperature and air quality control.",
        icon: "Snowflake",
    },
    {
        id: "ducting-ventilation",
        title: "Ducting & Ventilation",
        description:
            "Ducted concealed systems and comprehensive ventilation design. Hidden units with maximum airflow for spaces where aesthetics meet performance.",
        icon: "Wind",
    },
    {
        id: "exhaust-fahu",
        title: "Exhaust & Fresh Air (FAHU)",
        description:
            "Industrial exhaust fan installation and Fresh Air Handling Units (FAHU). Ensuring proper air circulation, fume extraction, and safety compliance.",
        icon: "Fan",
    },
    {
        id: "maintenance",
        title: "Maintenance & Commissioning",
        description:
            "Preventive and corrective maintenance programs with full system commissioning. Keeping your HVAC infrastructure at peak performance year-round.",
        icon: "Wrench",
    },
];

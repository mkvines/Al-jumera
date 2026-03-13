import Image from "next/image";
import { MapPin } from "lucide-react";
import PremiumTiltCard from "./PremiumTiltCard";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <PremiumTiltCard className="card-premium h-full flex flex-col rounded-[1.25rem]">
            {/* Image */}
            <div className="relative h-36 md:h-56 overflow-hidden bg-lavender shrink-0 rounded-t-[1.25rem] z-10 mask-border">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />

                {/* Location badge */}
                <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 flex items-center gap-1 md:gap-1.5 text-white text-[11px] md:text-sm font-medium">
                    <MapPin size={12} className="text-purple-light md:w-3.5 md:h-3.5" />
                    <span className="truncate max-w-[120px] md:max-w-none">{project.location}</span>
                </div>

                {/* Featured badge */}
                {project.featured && (
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-purple-gradient text-white text-[9px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1.5 rounded-full tracking-wider uppercase shadow-lg shadow-purple/20">
                        Featured
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-4 md:p-6 flex flex-col flex-1">
                <h3 className="text-[14px] md:text-lg font-bold text-dark mb-1.5 md:mb-2 tracking-tight group-hover:text-purple transition-colors duration-300 line-clamp-2">
                    {project.title}
                </h3>
                <p className="text-muted text-[12px] md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-2 md:line-clamp-none">{project.scope}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto">
                    {project.tags.slice(0, 2).map((tag) => (
                        <span
                            key={tag}
                            className="text-[10px] md:text-xs font-medium bg-lavender group-hover:bg-lavender-dark text-purple group-hover:text-purple-dark px-2 py-0.5 md:px-3 md:py-1 rounded-full transition-colors duration-300 whitespace-nowrap"
                        >
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 2 && (
                        <span className="text-[10px] md:hidden font-medium bg-lavender text-purple px-2 py-0.5 rounded-full">
                            +{project.tags.length - 2}
                        </span>
                    )}
                    {project.tags.slice(2).map((tag) => (
                        <span
                            key={tag}
                            className="hidden md:inline-flex text-[10px] md:text-xs font-medium bg-lavender group-hover:bg-lavender-dark text-purple group-hover:text-purple-dark px-2 py-0.5 md:px-3 md:py-1 rounded-full transition-colors duration-300 whitespace-nowrap"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </PremiumTiltCard>
    );
}

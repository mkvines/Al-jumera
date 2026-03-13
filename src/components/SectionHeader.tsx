"use client";

import { AnimateOnScroll } from "./animations";

interface SectionHeaderProps {
    label: string;
    title: string;
    description?: string;
    centered?: boolean;
    light?: boolean;
}

export default function SectionHeader({
    label,
    title,
    description,
    centered = true,
    light = false,
}: SectionHeaderProps) {
    return (
        <div className={`${centered ? "text-center" : ""} mb-14`}>
            <AnimateOnScroll animation="fade-up" duration={0.5}>
                <span className="pill-badge">
                    {label}
                </span>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.1} duration={0.6}>
                <h2
                    className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold mt-4 tracking-tight leading-tight ${light ? "text-white" : "text-dark"
                        }`}
                >
                    {title}
                </h2>
            </AnimateOnScroll>

            {description && (
                <AnimateOnScroll animation="fade-up" delay={0.2} duration={0.5}>
                    <p
                        className={`mt-4 max-w-2xl text-base leading-relaxed ${centered ? "mx-auto" : ""
                            } ${light ? "text-white/60" : "text-muted"}`}
                    >
                        {description}
                    </p>
                </AnimateOnScroll>
            )}
        </div>
    );
}

"use client";

import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import CTABanner from "@/components/CTABanner";
import { projects } from "@/data/projects";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/animations";
import { useLanguage } from "@/lib/i18n";

export default function ProjectsPage() {
    const { t } = useLanguage();

    return (
        <>
            <Hero
                title={t("projects.hero.title")}
                subtitle={t("projects.hero.subtitle")}
                description={t("projects.hero.desc")}
            />

            {/* Projects Grid */}
            <section className="py-20 px-6 bg-lavender-light">
                <div className="max-w-6xl mx-auto">
                    {/* Stats bar */}
                    <StaggerContainer className="flex flex-wrap justify-center gap-8 mb-14" staggerDelay={0.15}>
                        {[
                            { value: `${projects.length}`, labelKey: "projects.showcase" },
                            { value: "3+", labelKey: "projects.cities" },
                            { value: "100%", labelKey: "projects.onTime" },
                        ].map((stat) => (
                            <StaggerItem key={stat.labelKey} animation="scale-in">
                                <div className="text-center group cursor-default">
                                    <div className="text-3xl md:text-4xl font-extrabold text-dark group-hover:text-purple transition-colors duration-300">{stat.value}</div>
                                    <div className="text-muted text-sm font-medium">{t(stat.labelKey)}</div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <StaggerItem key={project.id}>
                                <ProjectCard project={project} />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Clients section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto text-center">
                    <AnimateOnScroll animation="fade-up">
                        <span className="pill-badge">{t("projects.trustedBy")}</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-dark mt-4 mb-10 tracking-tight">
                            {t("projects.valuedClients")}
                        </h2>
                    </AnimateOnScroll>
                    <StaggerContainer className="flex flex-wrap justify-center gap-4">
                        {projects.map((project) => (
                            <StaggerItem key={project.id} animation="scale-in">
                                <div className="card-premium px-6 py-3 text-sm font-medium text-dark group cursor-default">
                                    <span className="group-hover:text-purple transition-colors duration-300">{project.title}</span>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            <CTABanner
                title={t("projects.ctaTitle")}
                description={t("projects.ctaDesc")}
                buttonLabel={t("projects.ctaButton")}
            />
        </>
    );
}

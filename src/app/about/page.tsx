"use client";

import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ManpowerSection from "@/components/ManpowerSection";
import CTABanner from "@/components/CTABanner";
import { BRANDS } from "@/lib/constants";
import Image from "next/image";
import { CheckCircle, Target, Eye, Wrench } from "lucide-react";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/animations";
import { useLanguage } from "@/lib/i18n";

const valuesKeys = [
    { icon: Target, titleKey: "about.mission.title", descKey: "about.mission.desc" },
    { icon: Eye, titleKey: "about.vision.title", descKey: "about.vision.desc" },
    { icon: Wrench, titleKey: "about.approach.title", descKey: "about.approach.desc" },
];

const whyKeys = [
    "about.why1", "about.why2", "about.why3",
    "about.why4", "about.why5", "about.why6",
];

export default function AboutPage() {
    const { t } = useLanguage();

    return (
        <>
            <Hero
                title={t("about.hero.title")}
                subtitle={t("about.hero.subtitle")}
                description={t("about.hero.desc")}
            />

            {/* Company Story */}
            <section className="py-20 px-6 bg-lavender-light">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Text */}
                        <AnimateOnScroll animation="slide-left" duration={0.7}>
                            <div>
                                <span className="pill-badge">{t("about.journey")}</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-dark mt-4 mb-6 tracking-tight">
                                    {t("about.legacyTitle")}
                                </h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>{t("about.p1")}</p>
                                    <p>{t("about.p2")}</p>
                                    <p>{t("about.p3")}</p>
                                    <p>{t("about.p4")}</p>
                                </div>
                            </div>
                        </AnimateOnScroll>

                        {/* Values */}
                        <StaggerContainer className="space-y-6" staggerDelay={0.15}>
                            {valuesKeys.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <StaggerItem key={item.titleKey} animation="slide-right">
                                        <div className="card-premium p-8 group">
                                            <div className="w-12 h-12 bg-lavender group-hover:bg-lavender-dark rounded-xl flex items-center justify-center mb-4 transition-all duration-300 icon-glow relative">
                                                <Icon className="w-6 h-6 text-purple" />
                                            </div>
                                            <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-purple transition-colors duration-300">{t(item.titleKey)}</h3>
                                            <p className="text-muted text-sm leading-relaxed">{t(item.descKey)}</p>
                                        </div>
                                    </StaggerItem>
                                );
                            })}
                        </StaggerContainer>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <StatsSection />

            {/* Team & Manpower */}
            <ManpowerSection />

            {/* Why Choose Us */}
            <section className="py-20 px-6 bg-lavender-light">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <AnimateOnScroll animation="fade-up">
                            <span className="pill-badge">{t("home.why.label")}</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-4 tracking-tight">
                                {t("about.whyChoose")}
                            </h2>
                        </AnimateOnScroll>
                    </div>
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyKeys.map((key) => (
                            <StaggerItem key={key}>
                                <div className="flex items-start gap-4 card-premium p-6 group">
                                    <CheckCircle size={20} className="text-purple mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                    <span className="text-dark font-medium text-sm group-hover:text-purple-dark transition-colors duration-300">{t(key)}</span>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Brands */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <AnimateOnScroll animation="fade-up">
                        <div className="text-center mb-10">
                            <span className="pill-badge">{t("about.partners")}</span>
                            <h2 className="text-2xl md:text-3xl font-bold text-dark mt-4 tracking-tight">
                                {t("footer.brandsTitle")}
                            </h2>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fade-in" delay={0.2}>
                        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
                            {BRANDS.map((brand) => (
                                <div
                                    key={brand.name}
                                    className="flex items-center justify-center hover:scale-105 transition-all duration-300 cursor-default"
                                >
                                    <Image
                                        src={brand.logo}
                                        alt={`${brand.name} logo`}
                                        width={120}
                                        height={48}
                                        className="h-10 md:h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            <CTABanner
                title={t("about.ctaTitle")}
                description={t("about.ctaDesc")}
            />
        </>
    );
}

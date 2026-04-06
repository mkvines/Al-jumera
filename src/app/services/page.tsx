"use client";

import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import { services } from "@/data/services";
import { Wrench, ShieldCheck, Headphones } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "@/lib/i18n";

const introKeys = [
    { icon: Wrench, titleKey: "services.installation.title", descKey: "services.installation.desc" },
    { icon: ShieldCheck, titleKey: "services.maintenance.title", descKey: "services.maintenance.desc" },
    { icon: Headphones, titleKey: "services.consultation.title", descKey: "services.consultation.desc" },
];

const processStepKeys = [
    { step: "01", titleKey: "services.step1.title", descKey: "services.step1.desc" },
    { step: "02", titleKey: "services.step2.title", descKey: "services.step2.desc" },
    { step: "03", titleKey: "services.step3.title", descKey: "services.step3.desc" },
    { step: "04", titleKey: "services.step4.title", descKey: "services.step4.desc" },
];

export default function ServicesPage() {
    const { t, locale } = useLanguage();

    return (
        <>
            <Hero
                title={t("services.hero.title")}
                subtitle={t("services.hero.subtitle")}
                description={t("services.hero.desc")}
            />

            {/* Intro */}
            <section className="py-20 px-6 bg-lavender-light">
                <div className="max-w-6xl mx-auto">
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {introKeys.map((item) => {
                            const Icon = item.icon;
                            return (
                                <StaggerItem key={item.titleKey}>
                                    <div className="card-premium p-8 text-center group">
                                        <div className="w-16 h-16 mx-auto bg-lavender group-hover:bg-lavender-dark rounded-2xl flex items-center justify-center mb-5 icon-glow relative transition-all duration-300">
                                            <Icon className="w-8 h-8 text-purple" />
                                        </div>
                                        <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-purple transition-colors duration-300">{t(item.titleKey)}</h3>
                                        <p className="text-muted text-sm leading-relaxed">{t(item.descKey)}</p>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>

                    <SectionHeader
                        label={t("services.specializations")}
                        title={t("services.systemsTitle")}
                        description={t("services.systemsDesc")}
                    />

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service) => (
                            <StaggerItem key={service.id}>
                                <ServiceCard service={service} />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <SectionHeader
                        label={t("process.label")}
                        title={t("services.process")}
                    />
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8" staggerDelay={0.15}>
                        {processStepKeys.map((item) => (
                            <StaggerItem key={item.step}>
                                <div className="text-center relative group">
                                    <div className="text-6xl font-extrabold text-gradient opacity-20 mb-4 group-hover:opacity-40 transition-opacity duration-300">{item.step}</div>
                                    <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-purple transition-colors duration-300">{t(item.titleKey)}</h3>
                                    <p className="text-muted text-sm leading-relaxed">{t(item.descKey)}</p>
                                    {item.step !== "04" && (
                                        <div className="hidden md:block absolute top-10 -right-4 rtl:-left-4 rtl:right-auto w-8 text-purple/30 text-2xl">
                                            {locale === "ar" ? "←" : "→"}
                                        </div>
                                    )}
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            <CTABanner
                title={t("services.ctaTitle")}
                description={t("services.ctaDesc")}
            />
        </>
    );
}

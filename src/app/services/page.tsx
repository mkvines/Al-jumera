"use client";

import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import { services } from "@/data/services";
import { Wrench, ShieldCheck, Headphones } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations";
import SectionHeader from "@/components/SectionHeader";

export default function ServicesPage() {
    return (
        <>
            <Hero
                title="Our HVAC Services"
                subtitle="What We Offer"
                description="Comprehensive climate control solutions — from design and installation to maintenance and servicing."
            />

            {/* Intro */}
            <section className="py-20 px-6 bg-lavender-light">
                <div className="max-w-6xl mx-auto">
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                icon: Wrench,
                                title: "Installation",
                                desc: "Complete HVAC system design and installation for new constructions and retrofits.",
                            },
                            {
                                icon: ShieldCheck,
                                title: "Maintenance",
                                desc: "Preventive and corrective maintenance programs to ensure peak system performance.",
                            },
                            {
                                icon: Headphones,
                                title: "Consultation",
                                desc: "Expert HVAC consulting for system selection, energy optimization, and compliance.",
                            },
                        ].map((item) => {
                            const Icon = item.icon;
                            return (
                                <StaggerItem key={item.title}>
                                    <div className="card-premium p-8 text-center group">
                                        <div className="w-16 h-16 mx-auto bg-lavender group-hover:bg-lavender-dark rounded-2xl flex items-center justify-center mb-5 icon-glow relative transition-all duration-300">
                                            <Icon className="w-8 h-8 text-purple" />
                                        </div>
                                        <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-purple transition-colors duration-300">{item.title}</h3>
                                        <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>

                    <SectionHeader
                        label="Our Specializations"
                        title="HVAC Systems We Install & Service"
                        description="From precision-controlled clean rooms to large-scale industrial cooling — we have the expertise to handle every HVAC requirement."
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
                        label="How We Work"
                        title="Our Process"
                    />
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8" staggerDelay={0.15}>
                        {[
                            { step: "01", title: "Consultation", desc: "We assess your needs, space, and requirements" },
                            { step: "02", title: "Design", desc: "Our engineers design the optimal HVAC solution" },
                            { step: "03", title: "Installation", desc: "Professional installation by certified technicians" },
                            { step: "04", title: "Support", desc: "Ongoing maintenance and 24/7 support services" },
                        ].map((item) => (
                            <StaggerItem key={item.step}>
                                <div className="text-center relative group">
                                    <div className="text-6xl font-extrabold text-gradient opacity-20 mb-4 group-hover:opacity-40 transition-opacity duration-300">{item.step}</div>
                                    <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-purple transition-colors duration-300">{item.title}</h3>
                                    <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                                    {item.step !== "04" && (
                                        <div className="hidden md:block absolute top-10 -right-4 w-8 text-purple/30 text-2xl">→</div>
                                    )}
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            <CTABanner
                title="Need an HVAC Solution?"
                description="Let our experts design the perfect climate control system for your facility. Get a free consultation today."
            />
        </>
    );
}

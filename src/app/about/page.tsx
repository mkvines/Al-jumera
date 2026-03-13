"use client";

import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ManpowerSection from "@/components/ManpowerSection";
import CTABanner from "@/components/CTABanner";
import { BRANDS } from "@/lib/constants";
import Image from "next/image";
import { CheckCircle, Target, Eye, Wrench } from "lucide-react";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/animations";

export default function AboutPage() {
    return (
        <>
            <Hero
                title="About AL-JUMERAH ATQAAN"
                subtitle="Our Story"
                description="25+ years of engineering comfort, reliability, and excellence across the Kingdom of Saudi Arabia."
            />

            {/* Company Story */}
            <section className="py-20 px-6 bg-lavender-light">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Text */}
                        <AnimateOnScroll animation="slide-left" duration={0.7}>
                            <div>
                                <span className="pill-badge">Our Journey</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-dark mt-4 mb-6 tracking-tight">
                                    Building a Legacy in HVAC Excellence
                                </h2>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>
                                        AL-JUMERAH ATQAAN CONTRACTING EST. was founded with a clear mission:
                                        to bring world-class air conditioning and HVAC solutions to Saudi Arabia.
                                        Over the past 25 years, we have grown from a small local operation into
                                        one of the most trusted HVAC contractors in the Kingdom.
                                    </p>
                                    <p>
                                        Our team of certified professionals specializes in the servicing and
                                        new installation of comprehensive HVAC systems — from air cooled chillers
                                        and air handling units to advanced VRV/VRF systems and precision-controlled
                                        ventilation.
                                    </p>
                                    <p>
                                        We are proud to partner with the world&apos;s leading HVAC brands including
                                        TRANE, DAIKIN, Carrier, LG, Gree, YORK, and Zamil. These partnerships
                                        enable us to deliver cutting-edge technology backed by manufacturer
                                        warranties and support.
                                    </p>
                                    <p>
                                        Our portfolio spans royal palaces, government institutions, universities,
                                        hospitals, commercial warehouses, and showrooms — each project reflecting
                                        our commitment to quality, precision, and client satisfaction.
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>

                        {/* Values */}
                        <StaggerContainer className="space-y-6" staggerDelay={0.15}>
                            {[
                                {
                                    icon: Target,
                                    title: "Our Mission",
                                    desc: "To deliver world-class HVAC solutions with professional expertise, ensuring optimal comfort and energy efficiency for every client.",
                                },
                                {
                                    icon: Eye,
                                    title: "Our Vision",
                                    desc: "To be Saudi Arabia's most trusted HVAC contractor — known for quality, reliability, and innovation in climate control engineering.",
                                },
                                {
                                    icon: Wrench,
                                    title: "Our Approach",
                                    desc: "Every project begins with understanding the client's needs. We engineer solutions tailored to the building, climate, and budget — with zero compromise on quality.",
                                },
                            ].map((item) => {
                                const Icon = item.icon;
                                return (
                                    <StaggerItem key={item.title} animation="slide-right">
                                        <div className="card-premium p-8 group">
                                            <div className="w-12 h-12 bg-lavender group-hover:bg-lavender-dark rounded-xl flex items-center justify-center mb-4 transition-all duration-300 icon-glow relative">
                                                <Icon className="w-6 h-6 text-purple" />
                                            </div>
                                            <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-purple transition-colors duration-300">{item.title}</h3>
                                            <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
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
                            <span className="pill-badge">Why Us</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-4 tracking-tight">
                                Why Choose AL-JUMERAH ATQAAN
                            </h2>
                        </AnimateOnScroll>
                    </div>
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "25+ years of proven HVAC expertise",
                            "Partnerships with 7+ global brands",
                            "Government & institutional project experience",
                            "Licensed and certified professionals",
                            "End-to-end service: design to maintenance",
                            "Competitive pricing with premium quality",
                        ].map((item) => (
                            <StaggerItem key={item}>
                                <div className="flex items-start gap-4 card-premium p-6 group">
                                    <CheckCircle size={20} className="text-purple mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                    <span className="text-dark font-medium text-sm group-hover:text-purple-dark transition-colors duration-300">{item}</span>
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
                            <span className="pill-badge">Our Partners</span>
                            <h2 className="text-2xl md:text-3xl font-bold text-dark mt-4 tracking-tight">
                                Brands We Specialize In
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
                title="Let&apos;s Build Together"
                description="Bring your next HVAC project to life with our experienced team. Contact us for a free consultation."
            />
        </>
    );
}

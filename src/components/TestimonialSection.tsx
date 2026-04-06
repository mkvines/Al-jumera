"use client";

import Image from "next/image";
import { Star, Quote, BadgeCheck } from "lucide-react";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "./animations";
import PremiumTiltCard from "./PremiumTiltCard";
import { useLanguage } from "@/lib/i18n";

const testimonials = [
    {
        name: "Ahmed Al-Rashidi",
        roleKey: "testimonials.ahmed.role",
        company: "Saudi Investment Bank",
        image: "/images/clients/ahmed.webp",
        rating: 5,
        textKey: "testimonials.ahmed.text",
        verified: true,
    },
    {
        name: "Mohammed Al-Qahtani",
        roleKey: "testimonials.mohammed.role",
        company: "Al Rajhi Real Estate",
        image: "/images/clients/mohammed.webp",
        rating: 5,
        textKey: "testimonials.mohammed.text",
        verified: true,
    },
    {
        name: "Khalid Al-Dosari",
        roleKey: "testimonials.khalid.role",
        company: "King Saud University",
        image: "/images/clients/khalid.webp",
        rating: 5,
        textKey: "testimonials.khalid.text",
        verified: true,
    },
];

export default function TestimonialSection() {
    const { t } = useLanguage();

    return (
        <section className="py-16 md:py-24 px-4 md:px-6 bg-slate-50 relative overflow-hidden">
            {/* Subtle background accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-lavender/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section header */}
                <AnimateOnScroll animation="fade-up" duration={0.5}>
                    <div className="text-center mb-14">
                        <span className="pill-badge">{t("testimonials.badge")}</span>
                        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold mt-4 tracking-tight leading-tight text-dark">
                            {t("testimonials.title")}
                        </h2>
                        <p className="mt-4 max-w-xl mx-auto text-base leading-relaxed text-muted">
                            {t("testimonials.desc")}
                        </p>
                    </div>
                </AnimateOnScroll>

                {/* Testimonial cards grid */}
                <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                    {testimonials.map((tItem) => (
                        <StaggerItem key={tItem.name}>
                            <PremiumTiltCard className="group card-premium h-full flex flex-col rounded-[1.25rem]">
                                <div className="p-4 md:p-7 flex flex-col items-start flex-1 w-full h-full relative z-10 transition-colors duration-500 hover:bg-white/5">
                                    {/* Quote icon */}
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-lavender/70 flex items-center justify-center mb-3 md:mb-5 shrink-0">
                                    <Quote size={14} className="text-purple md:w-[18px] md:h-[18px]" />
                                </div>

                                {/* Stars */}
                                <div className="flex items-center gap-0.5 mb-3 md:mb-4">
                                    {[...Array(tItem.rating)].map((_, i) => (
                                        <Star key={i} size={12} className="fill-amber-400 text-amber-400 md:w-3.5 md:h-3.5" />
                                    ))}
                                </div>

                                {/* Testimonial text */}
                                <p className="text-[11px] md:text-[15px] leading-relaxed text-muted mb-4 md:mb-6 line-clamp-4 md:line-clamp-none flex-1">
                                    &ldquo;{t(tItem.textKey)}&rdquo;
                                </p>

                                {/* Divider */}
                                <div className="h-px bg-gradient-to-r from-transparent via-[#EDEDF0] to-transparent mb-4 md:mb-5" />

                                {/* Profile row */}
                                <div className="flex items-center gap-2.5 md:gap-3.5">
                                    {/* Avatar with ring */}
                                    <div className="relative shrink-0">
                                        <div
                                            className="w-8 h-8 md:w-11 md:h-11 rounded-full overflow-hidden ring-2 ring-lavender-dark/40 ring-offset-1 md:ring-offset-2 ring-offset-white"
                                        >
                                            <Image
                                                src={tItem.image}
                                                alt={tItem.name}
                                                width={44}
                                                height={44}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        {/* Verified badge */}
                                        {tItem.verified && (
                                            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 md:w-4.5 md:h-4.5">
                                                <BadgeCheck size={14} className="text-purple fill-lavender md:w-4 md:h-4" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Name & role */}
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-1.5">
                                            <p className="text-[11px] md:text-[13px] font-semibold text-dark tracking-tight truncate">
                                                {tItem.name}
                                            </p>
                                        </div>
                                        <p className="text-[9px] md:text-[11px] text-muted truncate">
                                            {t(tItem.roleKey)} <span className="hidden md:inline">· {tItem.company}</span>
                                        </p>
                                    </div>
                                </div>
                                </div>
                            </PremiumTiltCard>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Bottom trust line */}
                <AnimateOnScroll animation="fade-up" delay={0.3}>
                    <div className="flex items-center justify-center gap-6 mt-12 text-muted">
                        <div className="flex -space-x-2.5">
                            {testimonials.map((tItem) => (
                                <div
                                    key={tItem.name}
                                    className="w-8 h-8 rounded-full overflow-hidden border-2 border-white"
                                >
                                    <Image
                                        src={tItem.image}
                                        alt={tItem.name}
                                        width={32}
                                        height={32}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <span className="text-xs font-medium text-dark/60 tracking-wide">
                                {t("testimonials.ratingLine")}
                            </span>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}

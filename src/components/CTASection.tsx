"use client";

import Link from "next/link";
import { Phone, MessageCircle, Mail, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "./animations";
import { useLanguage } from "@/lib/i18n";

export default function CTASection() {
    const { t, locale } = useLanguage();
    const ArrowIcon = locale === "ar" ? ({ size, className }: { size: number; className: string }) => (
        <ArrowRight size={size} className={`${className} rotate-180`} />
    ) : ArrowRight;

    return (
        <section className="py-20 px-6">
            <AnimateOnScroll animation="scale-in" duration={0.7}>
                <div className="max-w-6xl mx-auto">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple via-purple-dark to-purple">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />
                        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-light/20 rounded-full blur-[100px]" />
                        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/3 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                        <div
                            className="absolute inset-0 opacity-[0.03]"
                            style={{
                                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                                backgroundSize: "24px 24px",
                            }}
                        />

                        <div className="relative z-10 px-8 md:px-16 py-16 md:py-20">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                {/* Left text */}
                                <AnimateOnScroll animation="slide-left" delay={0.1}>
                                    <div>
                                        <span className="text-white/70 text-sm font-semibold tracking-[0.25em] uppercase">
                                            {t("cta.getStarted")}
                                        </span>
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-tight leading-tight">
                                            {t("cta.fastQuote")}{" "}
                                            <span className="serif-accent">{t("cta.quotation")}</span>
                                            <br />
                                            <span className="text-white/60">{t("cta.forHvac")}</span>
                                        </h2>
                                        <p className="text-white/50 leading-relaxed max-w-md">
                                            {t("cta.desc")}
                                        </p>
                                    </div>
                                </AnimateOnScroll>

                                {/* Right actions */}
                                <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                                    {/* WhatsApp */}
                                    <StaggerItem animation="slide-right">
                                        <a
                                            href={`https://wa.me/966562411412?text=Hello, I'd like to request an HVAC quote.`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/25 rounded-2xl px-6 py-5 text-white transition-all duration-300 group"
                                        >
                                            <div className="w-12 h-12 bg-emerald/20 rounded-xl flex items-center justify-center shrink-0">
                                                <MessageCircle size={22} className="text-emerald-light" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-sm">{t("cta.whatsapp")}</div>
                                                <div className="text-white/50 text-sm">{COMPANY.phone2} ({COMPANY.contactName2})</div>
                                            </div>
                                            <ArrowIcon size={18} className="text-white/30 group-hover:text-white/60 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all" />
                                        </a>
                                    </StaggerItem>

                                    {/* Call */}
                                    <StaggerItem animation="slide-right">
                                        <a
                                            href={`tel:${COMPANY.phone}`}
                                            className="flex items-center gap-4 bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/25 rounded-2xl px-6 py-5 text-white transition-all duration-300 group"
                                        >
                                            <div className="w-12 h-12 bg-purple-light/20 rounded-xl flex items-center justify-center shrink-0">
                                                <Phone size={22} className="text-purple-light" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-sm">{t("cta.call")}</div>
                                                <div className="text-white/50 text-sm">{COMPANY.phone}</div>
                                            </div>
                                            <ArrowIcon size={18} className="text-white/30 group-hover:text-white/60 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all" />
                                        </a>
                                    </StaggerItem>

                                    {/* Email */}
                                    <StaggerItem animation="slide-right">
                                        <a
                                            href={`mailto:${COMPANY.email1}`}
                                            className="flex items-center gap-4 bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/25 rounded-2xl px-6 py-5 text-white transition-all duration-300 group"
                                        >
                                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                                <Mail size={22} className="text-white/70" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-sm">{t("cta.email")}</div>
                                                <div className="text-white/50 text-sm">{COMPANY.email1}</div>
                                            </div>
                                            <ArrowIcon size={18} className="text-white/30 group-hover:text-white/60 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all" />
                                        </a>
                                    </StaggerItem>

                                    {/* CTA button */}
                                    <StaggerItem animation="fade-up">
                                        <Link
                                            href="/contact"
                                            className="block text-center bg-white text-purple hover:text-purple-dark px-8 py-4 rounded-full text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-white/20 hover:-translate-y-0.5 mt-6"
                                        >
                                            {t("cta.detailedQuote")}
                                        </Link>
                                    </StaggerItem>
                                </StaggerContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimateOnScroll>
        </section>
    );
}

"use client";

import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { COMPANY } from "@/lib/constants";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/animations";
import { useLanguage } from "@/lib/i18n";

export default function ContactPage() {
    const { t } = useLanguage();

    return (
        <>
            <Hero
                title={t("contact.hero.title")}
                subtitle={t("contact.hero.subtitle")}
                description={t("contact.hero.desc")}
            />

            <section className="py-20 px-6 bg-lavender-light">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-6">
                            <AnimateOnScroll animation="slide-left" duration={0.6}>
                                <div>
                                    <span className="pill-badge">{t("contact.info")}</span>
                                    <h2 className="text-2xl md:text-3xl font-bold text-dark mt-4 mb-6 tracking-tight">
                                        {t("contact.discuss")}
                                    </h2>
                                    <p className="text-muted leading-relaxed text-sm mb-8">
                                        {t("contact.infoDesc")}
                                    </p>
                                </div>
                            </AnimateOnScroll>

                            {/* Info cards */}
                            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                                <StaggerItem animation="slide-left">
                                    <a
                                        href={`mailto:${COMPANY.email1}`}
                                        className="flex items-start gap-4 card-premium p-5 group"
                                    >
                                        <div className="w-11 h-11 bg-lavender group-hover:bg-lavender-dark rounded-lg flex items-center justify-center shrink-0 icon-glow relative">
                                            <Mail size={20} className="text-purple" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-dark text-sm mb-0.5 group-hover:text-purple transition-colors">
                                                {t("contact.emailUs")}
                                            </div>
                                            <div className="text-muted text-sm">{COMPANY.email1}</div>
                                            <div className="text-muted text-sm">{COMPANY.email2}</div>
                                        </div>
                                    </a>
                                </StaggerItem>

                                <StaggerItem animation="slide-left">
                                    <a
                                        href={`tel:${COMPANY.phone}`}
                                        className="flex items-start gap-4 card-premium p-5 group"
                                    >
                                        <div className="w-11 h-11 bg-lavender group-hover:bg-lavender-dark rounded-lg flex items-center justify-center shrink-0 icon-glow relative">
                                            <Phone size={20} className="text-purple" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-dark text-sm mb-0.5 group-hover:text-purple transition-colors">
                                                {t("contact.callUs")}
                                            </div>
                                            <div className="text-muted text-sm">{COMPANY.phone}</div>
                                            <div className="text-muted text-sm">{COMPANY.phone2} <span className="text-[11px] opacity-70">({COMPANY.contactName2})</span></div>
                                        </div>
                                    </a>
                                </StaggerItem>

                                <StaggerItem animation="slide-left">
                                    <div className="flex items-start gap-4 card-premium p-5 group">
                                        <div className="w-11 h-11 bg-lavender group-hover:bg-lavender-dark rounded-lg flex items-center justify-center shrink-0 icon-glow relative">
                                            <MapPin size={20} className="text-purple" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-dark text-sm mb-0.5">
                                                {t("contact.visitUs")}
                                            </div>
                                            <div className="text-muted text-sm">{COMPANY.address}</div>
                                        </div>
                                    </div>
                                </StaggerItem>

                                <StaggerItem animation="slide-left">
                                    <div className="flex items-start gap-4 card-premium p-5 group">
                                        <div className="w-11 h-11 bg-lavender group-hover:bg-lavender-dark rounded-lg flex items-center justify-center shrink-0 icon-glow relative">
                                            <Clock size={20} className="text-purple" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-dark text-sm mb-0.5">
                                                {t("contact.workingHours")}
                                            </div>
                                            <div className="text-muted text-sm">
                                                {t("contact.sunThu")}
                                            </div>
                                            <div className="text-muted text-sm">
                                                {t("contact.friSat")}
                                            </div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            </StaggerContainer>
                        </div>

                        {/* Form */}
                        <AnimateOnScroll animation="slide-right" delay={0.2} duration={0.7} className="lg:col-span-3">
                            <ContactForm />
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Map */}
            <AnimateOnScroll animation="fade-in" duration={0.8}>
                <section className="h-[400px] w-full bg-lavender relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6858!2d46.7!3d24.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzAwLjAiTiA0NsKwNDInMDAuMCJF!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
                        className="w-full h-full border-0 grayscale opacity-80"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="AL-JUMERAH ATQAAN Office Location"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-lavender-light/80 to-transparent pointer-events-none" />
                </section>
            </AnimateOnScroll>
        </>
    );
}

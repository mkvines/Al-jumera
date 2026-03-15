"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { COMPANY, NAV_LINKS, BRANDS } from "@/lib/constants";
import { AnimateOnScroll } from "./animations";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-gradient-to-b from-white to-lavender-light/60 text-dark relative overflow-hidden">
            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-purple/20 to-transparent" />

            {/* Brand bar with fade mask */}
            <div className="border-b border-border/50 relative">
                <div className="max-w-7xl mx-auto px-6 py-8 relative">
                    <p className="text-center text-[10px] md:text-xs font-semibold text-muted-light mb-6 md:mb-8 tracking-[0.3em] uppercase">
                        Brands We Specialize In
                    </p>
                    
                    {/* Fade masking for mobile brand strip */}
                    <div 
                        className="overflow-hidden"
                        style={{
                            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
                        }}
                    >
                        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-around items-center gap-6 md:gap-12 px-4">
                            {BRANDS.map((brand) => (
                                <div
                                    key={brand.name}
                                    className="flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-default shrink-0"
                                >
                                    <Image
                                        src={brand.logo}
                                        alt={`${brand.name} logo`}
                                        width={90}
                                        height={36}
                                        className="h-6 md:h-8 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-6 pt-12 pb-16 md:py-16">
                <AnimateOnScroll animation="fade-up" duration={0.6}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-8">
                        {/* Company (takes 4 cols on lg) */}
                        <div className="lg:col-span-4">
                            <div className="flex items-center gap-3 mb-8 h-16 md:h-20 w-[240px] md:w-[280px] relative">
                                <Image 
                                    src="/images/logo.png" 
                                    alt="AJ·C Contracting Logo" 
                                    fill
                                    className="object-contain object-left scale-150 origin-left"
                                />
                            </div>
                            <p className="text-muted text-[13px] md:text-sm leading-relaxed mt-5 md:mt-4 max-w-[280px] md:max-w-none">
                                {COMPANY.description}
                            </p>
                        </div>

                        {/* MOBILE 2-COLUMN GRID (Links + Services take 5 cols on lg) */}
                        <div className="grid grid-cols-2 gap-8 lg:col-span-5">
                            {/* Quick Links */}
                            <div>
                                <h3 className="font-bold text-[11px] md:text-sm tracking-widest uppercase mb-5 md:mb-6 text-dark/40">
                                    Quick Links
                                </h3>
                                <ul className="space-y-3">
                                    {NAV_LINKS.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="text-muted hover:text-purple hover:translate-x-1 text-[13px] md:text-sm transition-all duration-200 inline-block font-medium"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Services */}
                            <div>
                                <h3 className="font-bold text-[11px] md:text-sm tracking-widest uppercase mb-5 md:mb-6 text-dark/40">
                                    Our Services
                                </h3>
                                <ul className="space-y-3.5 md:space-y-3 text-[13px] md:text-sm text-muted font-medium">
                                    <li className="hover:text-purple transition-colors cursor-default">Air Cooled Chiller</li>
                                    <li className="hover:text-purple transition-colors cursor-default">Air Handling Unit (AHU)</li>
                                    <li className="hover:text-purple transition-colors cursor-default">Ducted Concealed</li>
                                    <li className="hover:text-purple transition-colors cursor-default">VRV / VRF Systems</li>
                                    <li className="hover:text-purple transition-colors cursor-default">Package Unit</li>
                                    <li className="hover:text-purple transition-colors cursor-default">Exhaust Fan & Ventilation</li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact (takes 3 cols on lg) */}
                        <div className="lg:col-span-3">
                            <h3 className="font-bold text-[11px] md:text-sm tracking-widest uppercase mb-5 md:mb-6 text-dark/40">
                                Contact Us
                            </h3>
                            <ul className="space-y-4 md:space-y-4">
                                <li>
                                    <a
                                        href={`mailto:${COMPANY.email1}`}
                                        className="flex items-center gap-3 md:gap-3 text-[13px] md:text-sm text-muted hover:text-purple transition-colors group p-2 -ml-2 rounded-lg hover:bg-white/50"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-lavender flex items-center justify-center shrink-0 border border-lavender-dark group-hover:bg-purple group-hover:border-purple transition-colors">
                                            <Mail size={14} className="text-purple group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="font-medium">{COMPANY.email1}</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`mailto:${COMPANY.email2}`}
                                        className="flex items-center gap-3 md:gap-3 text-[13px] md:text-sm text-muted hover:text-purple transition-colors group p-2 -ml-2 rounded-lg hover:bg-white/50"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-lavender flex items-center justify-center shrink-0 border border-lavender-dark group-hover:bg-purple group-hover:border-purple transition-colors">
                                            <Mail size={14} className="text-purple group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="font-medium">{COMPANY.email2}</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`tel:${COMPANY.phone}`}
                                        className="flex items-center gap-3 md:gap-3 text-[13px] md:text-sm text-muted hover:text-purple transition-colors group p-2 -ml-2 rounded-lg hover:bg-white/50"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-lavender flex items-center justify-center shrink-0 border border-lavender-dark group-hover:bg-purple group-hover:border-purple transition-colors">
                                            <Phone size={14} className="text-purple group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="font-medium">{COMPANY.phone}</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`tel:${COMPANY.phone2}`}
                                        className="flex items-center gap-3 md:gap-3 text-[13px] md:text-sm text-muted hover:text-purple transition-colors group p-2 -ml-2 rounded-lg hover:bg-white/50"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-lavender flex items-center justify-center shrink-0 border border-lavender-dark group-hover:bg-purple group-hover:border-purple transition-colors">
                                            <Phone size={14} className="text-purple group-hover:text-white transition-colors" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-medium">{COMPANY.phone2}</span>
                                            <span className="text-[11px] text-muted-light mt-0.5 leading-none">{COMPANY.contactName2}</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="flex items-start gap-3 md:gap-3 text-[13px] md:text-sm text-muted p-2 -ml-2 leading-relaxed font-medium">
                                    <div className="w-8 h-8 rounded-full bg-lavender flex items-center justify-center shrink-0 border border-lavender-dark mt-0.5">
                                        <MapPin size={14} className="text-purple" />
                                    </div>
                                    <span className="mt-1.5">{COMPANY.address}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>

            {/* Copyright */}
            <div className="border-t border-border/50 bg-white/40 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col-reverse md:flex-row justify-between items-center gap-5">
                    <p className="text-muted-light text-[11px] md:text-sm font-medium text-center md:text-left w-full md:w-auto mt-2 md:mt-0">
                        © {new Date().getFullYear()} {COMPANY.name} All rights reserved.
                    </p>
                    <div className="flex items-center justify-between w-full md:w-auto gap-4 md:gap-6">
                        <p className="text-muted-light/70 text-[10px] md:text-xs font-semibold uppercase tracking-wider">
                            We Engineer Comfort
                        </p>
                        <button
                            onClick={scrollToTop}
                            className="w-10 h-10 md:w-9 md:h-9 bg-white hover:bg-lavender border border-border hover:border-purple/30 rounded-full md:rounded-lg flex items-center justify-center text-muted hover:text-purple shadow-sm transition-all duration-300 transform hover:-translate-y-1"
                            aria-label="Back to top"
                        >
                            <ArrowUp size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

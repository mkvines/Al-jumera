"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <>
            {/* ═══ FLOATING CAPSULE NAVBAR ═══ */}
            <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-5 pointer-events-none">
                <nav
                    className={`max-w-[1200px] mx-auto pointer-events-auto transition-all duration-300 ${scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.08)]" : "shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                        }`}
                    style={{
                        borderRadius: "100px",
                        border: "1.3px solid rgba(237, 237, 237, 0.6)",
                        background: "rgba(255, 255, 255, 0.65)",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                    }}
                >
                    <div className="flex items-center justify-between h-[56px] md:h-[60px] px-4 md:px-6">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2.5 shrink-0 h-full py-1">
                            <div className="relative h-full w-[160px] md:w-[200px]">
                                <Image 
                                    src="/images/logo.png" 
                                    alt="AJ·C Contracting Logo" 
                                    fill
                                    className="object-contain object-left scale-150 origin-left"
                                    priority
                                />
                            </div>
                        </Link>

                        {/* Desktop nav links — centered */}
                        <div className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-[#191919] hover:text-[#6B46FF] text-[15px] font-medium transition-colors duration-200"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop buttons — right */}
                        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
                            <Link
                                href="/about"
                                className="text-[#191919] text-[14px] font-medium px-5 py-[9px] bg-white hover:bg-gray-50 transition-colors"
                                style={{
                                    borderRadius: "8px",
                                    border: "1px solid #EDEDED",
                                }}
                            >
                                About Us
                            </Link>
                            <Link
                                href="/contact"
                                className="text-white text-[14px] font-medium px-5 py-[9px] hover:opacity-90 transition-opacity"
                                style={{
                                    borderRadius: "8px",
                                    background: "linear-gradient(299deg, #A58FFF 0%, #3300FF 55%, #A58FFF 100%)",
                                }}
                            >
                                Get a Quote
                            </Link>
                        </div>

                        {/* Mobile menu button — square grid icon like Vaulta */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="lg:hidden text-[#191919] p-1.5 -mr-1"
                            aria-label="Open menu"
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>

            {/* ═══ MOBILE FULL-SCREEN MENU OVERLAY ═══ */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[60] lg:hidden"
                    style={{
                        background: "rgba(255, 255, 255, 0.85)",
                        backdropFilter: "blur(24px)",
                        WebkitBackdropFilter: "blur(24px)",
                    }}
                >
                    {/* Purple decorative gradient blob — top right */}
                    <div
                        className="absolute top-0 right-0 w-[280px] h-[280px] pointer-events-none"
                        style={{
                            background: "radial-gradient(circle at top right, rgba(51, 0, 255, 0.15) 0%, rgba(165, 143, 255, 0.08) 40%, transparent 70%)",
                        }}
                    />

                    {/* Top bar — logo + close */}
                    <div className="flex items-center justify-between px-6 h-[72px]">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2.5 h-full py-2"
                        >
                            <div className="relative h-full w-[160px]">
                                <Image 
                                    src="/images/logo.png" 
                                    alt="AJ·C Contracting Logo" 
                                    fill
                                    className="object-contain object-left scale-150 origin-left"
                                />
                            </div>
                        </Link>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-[#191919] p-2 -mr-2"
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Nav links — stacked */}
                    <nav className="px-6 pt-4 flex flex-col">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-[#191919] text-[17px] font-medium py-4 border-b border-[#F0F0F0] transition-colors hover:text-[#6B46FF]"
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Buttons — side by side */}
                        <div className="flex items-center gap-3 mt-8">
                            <Link
                                href="/about"
                                onClick={() => setIsOpen(false)}
                                className="text-[#191919] text-[14px] font-medium px-6 py-2.5"
                                style={{
                                    borderRadius: "8px",
                                    border: "1px solid #EDEDED",
                                }}
                            >
                                About Us
                            </Link>
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="text-white text-[14px] font-medium px-6 py-2.5"
                                style={{
                                    borderRadius: "8px",
                                    background: "linear-gradient(299deg, #A58FFF 0%, #3300FF 55%, #A58FFF 100%)",
                                }}
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
}

"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Wrench, MapPin, Star, ChevronLeft, ChevronRight, Play } from "lucide-react";
import AnimatedHeroText from "./AnimatedHeroText";

/* ── Smooth entrance helpers ── */
const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease } },
});

const fadeScale = (delay: number) => ({
    initial: { opacity: 0, y: 20, scale: 0.97 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.85, delay, ease } },
});

const fadeIn = (delay: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6, delay, ease } },
});



/* ── Slide data ── */
const slides = [
    { image: "/hero/hero0.webp", alt: "Al-Jumerah Atqaan HVAC engineers with 25+ years experience and 200+ projects completed", label: "Who We Are", tag: "Featured" },
    { image: "/hero/ac.webp", alt: "Air conditioning unit installation", label: "AC Installation", tag: "Popular" },
    { image: "/hero/hero1.webp", alt: "HVAC technicians servicing rooftop condensing unit", label: "Rooftop Service", tag: "Featured" },
    { image: "/hero/hero2.webp", alt: "Night shift ductwork and AHU installation on site", label: "Duct Installation", tag: "Latest" },
    { image: "/hero/hero3.webp", alt: "Technician wiring HVAC electrical control panel", label: "Smart Controls", tag: "Expert" },
    { image: "/hero/hero4.webp", alt: "HVAC engineering team walking through modern facility", label: "Professional Team", tag: "Trusted" },
    { image: "/hero/hero5.webp", alt: "Engineers and contractors reviewing HVAC blueprints on construction site", label: "Project Planning", tag: "New" },
];

const trustStats = [
    { icon: Clock, label: "25+ Years Experience" },
    { icon: Wrench, label: "Installation & Maintenance" },
    { icon: MapPin, label: "Riyadh · KSA" },
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    const goTo = useCallback((index: number) => {
        setCurrent(index);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(next, 5500);
        return () => clearInterval(timer);
    }, [isPaused, next]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.changedTouches[0].screenX;
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        touchEndX.current = e.changedTouches[0].screenX;
        const diff = touchStartX.current - touchEndX.current;
        if (Math.abs(diff) > 50) {
            if (diff > 0) next();
            else prev();
        }
    };

    const nextSlide = (current + 1) % slides.length;

    return (
        <section
            className="relative w-full overflow-hidden bg-white"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            role="region"
            aria-label="Hero slideshow"
            aria-roledescription="carousel"
            tabIndex={0}
        >
            {/* ── Premium Light Wave Glow (Overall) ── */}
            <motion.div
                initial={{ opacity: 0.3, scale: 1 }}
                animate={{ 
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.1, 1],
                }}
                transition={{ 
                    duration: 12, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
                className="absolute inset-x-0 top-0 h-full w-full bg-[radial-gradient(circle_at_50%_40%,rgba(107,70,255,0.06)_0%,transparent_60%)] pointer-events-none z-[1]"
            />
            <motion.div
                initial={{ opacity: 0.2, scale: 1.1 }}
                animate={{ 
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1.1, 1.2, 1.1],
                }}
                transition={{ 
                    duration: 15, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute inset-x-0 bottom-0 h-full w-full bg-[radial-gradient(circle_at_20%_80%,rgba(165,143,255,0.05)_0%,transparent_50%)] pointer-events-none z-[1]"
            />

            {/* ════════════════ MOBILE LAYOUT (<lg) ════════════════ */}
            <div className="lg:hidden relative z-[3] flex flex-col px-5 pt-28 pb-5">
                {/* Text content */}
                <div className="flex flex-col mb-6">
                    {/* Trust badge */}
                    <motion.div className="mb-4" {...fadeUp(0.1)}>
                        <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-purple bg-lavender/80 backdrop-blur-sm px-4 py-2 rounded-full border border-lavender-dark/50">
                            <span className="flex items-center gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={10} className="fill-purple text-purple" />
                                ))}
                            </span>
                            Trusted Partner · Since 1998
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1 className="text-[1.65rem] leading-[1.15] font-bold text-dark tracking-[-0.02em]" {...fadeUp(0.2)}>
                        Engineering{" "}
                        <AnimatedHeroText />
                        <br />
                        Across{" "}
                        <span className="serif-accent text-gradient">Saudi Arabia</span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p className="mt-3 text-muted text-[13px] leading-[1.7] max-w-[300px]" {...fadeUp(0.3)}>
                        From royal palaces to industrial warehouses — world-class HVAC solutions.
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div className="mt-5 flex items-center gap-3" {...fadeUp(0.4)}>
                        <Link
                            href="/contact"
                            className="text-white text-[13px] font-medium px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                            style={{ background: "linear-gradient(299deg, #A58FFF 0%, #3300FF 55%, #A58FFF 100%)" }}
                        >
                            Get a Quote
                        </Link>
                        <Link
                            href="/projects"
                            className="text-dark text-[13px] font-medium px-5 py-2.5 rounded-lg border border-[#EDEDED] hover:border-purple/30 transition-colors"
                        >
                            Our Projects
                        </Link>
                    </motion.div>
                </div>

                {/* ── MOBILE PREMIUM IMAGE CARD ── */}
                <motion.div className="flex flex-col gap-3" {...fadeScale(0.5)}>
                    {/* Card wrapper with glow */}
                    <div className="relative">
                        {/* ── Spreading Purple Waves (Mobile) ── */}
                        {[...Array(2)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ 
                                    scale: [0.8, 2.5], 
                                    opacity: [0, 0.15, 0] 
                                }}
                                transition={{ 
                                    duration: 4, 
                                    repeat: Infinity, 
                                    delay: i * 2,
                                    ease: "easeOut" 
                                }}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none z-[0]"
                                style={{
                                    background: "radial-gradient(circle, rgba(165,143,255,0.25) 0%, transparent 70%)",
                                    filter: "blur(40px)",
                                }}
                            />
                        ))}

                        {/* Stacked peek card (next slide) */}
                        <div
                            className="absolute inset-x-2 top-3 bottom-0 overflow-hidden pointer-events-none"
                            style={{
                                borderRadius: "20px",
                                opacity: 0.2,
                                transform: "scale(0.95) translateY(10px)",
                            }}
                        >
                            <Image src={slides[nextSlide].image} alt="" fill className="object-cover" sizes="100vw" />
                        </div>

                        {/* ═══ MAIN CARD ═══ */}
                        <div
                            className="relative overflow-hidden"
                            style={{
                                borderRadius: "20px",
                                border: "1.5px solid rgba(255,255,255,0.25)",
                                boxShadow: "0 20px 50px rgba(51,0,255,0.1), 0 8px 24px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.3)",
                                aspectRatio: "4 / 3",
                            }}
                        >
                            {/* Image slides */}
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className="absolute inset-0 transition-all duration-700 ease-in-out"
                                    style={{
                                        opacity: index === current ? 1 : 0,
                                        transform: index === current ? "scale(1)" : "scale(1.06)",
                                        willChange: 'opacity, transform'
                                    }}
                                >
                                    <Image
                                        src={slide.image}
                                        alt={slide.alt}
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                        sizes="(max-width: 1024px) 100vw, 560px"
                                    />
                                </div>
                            ))}

                            {/* Dark gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/5 z-[1]" />

                            {/* Top: Tag + Label badges */}
                            <div className="absolute top-3.5 left-3.5 z-[2] flex items-center gap-2">
                                <span
                                    className="text-[9px] font-bold text-white uppercase tracking-[0.12em] px-2.5 py-1"
                                    style={{
                                        background: "linear-gradient(299deg, #A58FFF 0%, #3300FF 55%, #A58FFF 100%)",
                                        borderRadius: "6px",
                                    }}
                                >
                                    {slides[current].tag}
                                </span>
                                <span
                                    className="text-[9px] font-semibold text-white/90 px-2.5 py-1 tracking-wider uppercase"
                                    style={{
                                        background: "rgba(255,255,255,0.12)",
                                        backdropFilter: "blur(12px)",
                                        WebkitBackdropFilter: "blur(12px)",
                                        borderRadius: "6px",
                                        border: "1px solid rgba(255,255,255,0.18)",
                                    }}
                                >
                                    {slides[current].label}
                                </span>
                            </div>

                            {/* Top right: Play button */}
                            <div className="absolute top-3.5 right-3.5 z-[2]">
                                <div
                                    className="w-9 h-9 rounded-full flex items-center justify-center"
                                    style={{
                                        background: "rgba(255,255,255,0.14)",
                                        backdropFilter: "blur(12px)",
                                        WebkitBackdropFilter: "blur(12px)",
                                        border: "1px solid rgba(255,255,255,0.2)",
                                    }}
                                >
                                    <Play size={12} className="text-white/90 ml-0.5" fill="currentColor" />
                                </div>
                            </div>

                            {/* Bottom: Glassmorphism info bar */}
                            <div className="absolute bottom-3 left-3 right-3 z-[2]">
                                <div
                                    className="px-3.5 py-2.5 flex items-center justify-between"
                                    style={{
                                        background: "rgba(255,255,255,0.1)",
                                        backdropFilter: "blur(20px)",
                                        WebkitBackdropFilter: "blur(20px)",
                                        borderRadius: "12px",
                                        border: "1px solid rgba(255,255,255,0.15)",
                                    }}
                                >
                                    <div>
                                        <p className="text-white font-semibold text-[12px] tracking-tight leading-tight">
                                            {slides[current].label}
                                        </p>
                                        <p className="text-white/45 text-[9px] font-medium mt-0.5">
                                            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <div className="flex items-center gap-1">
                                            {slides.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => goTo(index)}
                                                    className={`rounded-full transition-all duration-500 ${index === current
                                                        ? "w-4 h-1.5 bg-white"
                                                        : "w-1.5 h-1.5 bg-white/30"
                                                        }`}
                                                    aria-label={`Go to slide ${index + 1}`}
                                                />
                                            ))}
                                        </div>
                                        <div className="w-px h-3.5 bg-white/15" />
                                        <div className="flex items-center gap-1">
                                            <button
                                                onClick={prev}
                                                className="w-6 h-6 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors border border-white/10"
                                                aria-label="Previous"
                                            >
                                                <ChevronLeft size={12} />
                                            </button>
                                            <button
                                                onClick={next}
                                                className="w-6 h-6 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors border border-white/10"
                                                aria-label="Next"
                                            >
                                                <ChevronRight size={12} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trust stats strip */}
                    <div
                        className="flex items-center justify-between px-4 py-2.5"
                        style={{
                            background: "rgba(245, 243, 255, 0.6)",
                            backdropFilter: "blur(8px)",
                            borderRadius: "14px",
                            border: "1px solid rgba(229, 231, 235, 0.5)",
                        }}
                    >
                        {trustStats.map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <div key={i} className="flex items-center gap-1.5 text-muted">
                                    <Icon size={11} className="text-purple shrink-0" />
                                    <span className="text-[9.5px] font-medium tracking-wide whitespace-nowrap">
                                        {stat.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>

            {/* ════════════════ DESKTOP LAYOUT (≥lg) ════════════════ */}
            <div className="hidden lg:flex relative z-[3] min-h-screen items-center max-w-7xl mx-auto px-10 gap-12 xl:gap-16">
                {/* Left: Text content */}
                <div className="flex-1 max-w-xl py-32">
                    {/* Trust badge */}
                    <motion.div className="mb-8" {...fadeUp(0.15)}>
                        <span className="inline-flex items-center gap-2.5 text-sm font-medium text-dark bg-lavender/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-lavender-dark shadow-sm">
                            <span className="flex items-center gap-0.5 text-purple">
                                4.9
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={12} className="fill-purple text-purple" />
                                ))}
                            </span>
                            Trusted by Hundreds
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1 className="text-[3rem] xl:text-[3.75rem] leading-[1.08] font-bold text-dark tracking-[-0.025em]" {...fadeUp(0.25)}>
                        Engineering{" "}
                        <AnimatedHeroText />
                        <br />
                        Across{" "}
                        <span className="serif-accent text-gradient">Saudi Arabia</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p className="mt-6 text-muted text-base xl:text-lg max-w-md leading-relaxed" {...fadeUp(0.35)}>
                        From royal palaces to industrial warehouses — we deliver world-class
                        HVAC solutions backed by decades of expertise and global brand partnerships.
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div className="mt-10 flex items-center gap-4" {...fadeUp(0.45)}>
                        <Link
                            href="/contact"
                            className="text-white text-[15px] font-medium px-7 py-3 hover:opacity-90 transition-opacity hover:shadow-lg hover:shadow-purple/20"
                            style={{
                                borderRadius: "10px",
                                background: "linear-gradient(299deg, #A58FFF 0%, #3300FF 55%, #A58FFF 100%)",
                            }}
                        >
                            Request a Quote
                        </Link>
                        <Link
                            href="/projects"
                            className="text-dark text-[15px] font-medium px-7 py-3 hover:border-purple/30 transition-all"
                            style={{
                                borderRadius: "10px",
                                border: "1.3px solid #EDEDED",
                            }}
                        >
                            View Our Projects
                        </Link>
                    </motion.div>

                    {/* Trust stats */}
                    <motion.div className="mt-12 flex items-center gap-6" {...fadeUp(0.55)}>
                        {trustStats.map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <div key={i} className="flex items-center gap-2 text-muted">
                                    <div className="w-9 h-9 rounded-xl bg-lavender flex items-center justify-center border border-lavender-dark/50">
                                        <Icon size={14} className="text-purple" />
                                    </div>
                                    <span className="text-xs font-medium tracking-wide whitespace-nowrap">
                                        {stat.label}
                                    </span>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Right: Premium Image Card */}
                <motion.div className="flex-1 flex items-center justify-center py-32" {...fadeScale(0.4)}>
                    <div className="relative w-full max-w-[560px]">
                        {/* ── Spreading Purple Waves (Desktop) ── */}
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ 
                                    scale: [0.8, 3.5], 
                                    opacity: [0, 0.12, 0] 
                                }}
                                transition={{ 
                                    duration: 6, 
                                    repeat: Infinity, 
                                    delay: i * 2,
                                    ease: "easeOut" 
                                }}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full pointer-events-none z-[0]"
                                style={{
                                    background: "radial-gradient(circle, rgba(165,143,255,0.3) 0%, transparent 70%)",
                                    filter: "blur(60px)",
                                }}
                            />
                        ))}

                        {/* Stacked peek card */}
                        <div
                            className="absolute top-3 left-3 right-3 bottom-0 overflow-hidden"
                            style={{
                                borderRadius: "26px",
                                opacity: 0.2,
                                transform: "scale(0.95) translateY(12px)",
                            }}
                        >
                            <Image src={slides[nextSlide].image} alt="" fill className="object-cover" sizes="560px" />
                        </div>

                        {/* Main card */}
                        <div
                            className="relative aspect-[4/3] overflow-hidden group"
                            style={{
                                borderRadius: "24px",
                                border: "1.5px solid rgba(255, 255, 255, 0.35)",
                                boxShadow: "0 24px 64px rgba(51,0,255,0.1), 0 12px 32px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.5)",
                            }}
                        >
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className="absolute inset-0 transition-all duration-[900ms] ease-in-out"
                                    style={{
                                        opacity: index === current ? 1 : 0,
                                        transform: index === current ? "scale(1)" : "scale(1.06)",
                                        willChange: 'opacity, transform'
                                    }}
                                >
                                    <Image
                                        src={slide.image}
                                        alt={slide.alt}
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                        sizes="560px"
                                    />
                                </div>
                            ))}

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent z-[1]" />

                            {/* Top badges */}
                            <div className="absolute top-5 left-5 z-[2] flex items-center gap-2">
                                <span
                                    className="text-[9px] font-bold text-white uppercase tracking-[0.15em] px-3 py-1.5"
                                    style={{
                                        background: "linear-gradient(299deg, #A58FFF 0%, #3300FF 55%, #A58FFF 100%)",
                                        borderRadius: "8px",
                                    }}
                                >
                                    {slides[current].tag}
                                </span>
                                <span
                                    className="text-[10px] font-semibold text-white/85 px-3.5 py-1.5 tracking-wider uppercase"
                                    style={{
                                        background: "rgba(255,255,255,0.1)",
                                        backdropFilter: "blur(16px)",
                                        borderRadius: "8px",
                                        border: "1px solid rgba(255,255,255,0.12)",
                                    }}
                                >
                                    {slides[current].label}
                                </span>
                            </div>

                            {/* Top right play circle */}
                            <div className="absolute top-5 right-5 z-[2]">
                                <div
                                    className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                                    style={{
                                        background: "rgba(255,255,255,0.12)",
                                        backdropFilter: "blur(16px)",
                                        border: "1px solid rgba(255,255,255,0.18)",
                                    }}
                                >
                                    <Play size={15} className="text-white/90 ml-0.5" fill="currentColor" />
                                </div>
                            </div>

                            {/* Bottom glass panel */}
                            <div className="absolute bottom-0 left-0 right-0 z-[2]">
                                <div
                                    className="mx-4 mb-4 px-5 py-3.5 flex items-center justify-between"
                                    style={{
                                        background: "rgba(255,255,255,0.08)",
                                        backdropFilter: "blur(24px)",
                                        WebkitBackdropFilter: "blur(24px)",
                                        borderRadius: "16px",
                                        border: "1px solid rgba(255,255,255,0.12)",
                                    }}
                                >
                                    <div>
                                        <p className="text-white font-semibold text-sm tracking-tight">
                                            {slides[current].label}
                                        </p>
                                        <p className="text-white/45 text-[11px] font-medium mt-0.5">
                                            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1.5">
                                            {slides.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => goTo(index)}
                                                    className={`rounded-full transition-all duration-500 ${index === current
                                                        ? "w-5 h-1.5 bg-white"
                                                        : "w-1.5 h-1.5 bg-white/30 hover:bg-white/50"
                                                        }`}
                                                    aria-label={`Go to slide ${index + 1}`}
                                                    aria-current={index === current ? "true" : undefined}
                                                />
                                            ))}
                                        </div>
                                        <div className="w-px h-5 bg-white/10" />
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={prev}
                                                className="w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all border border-white/10 hover:border-white/25 hover:bg-white/5"
                                                aria-label="Previous slide"
                                            >
                                                <ChevronLeft size={15} />
                                            </button>
                                            <button
                                                onClick={next}
                                                className="w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all border border-white/10 hover:border-white/25 hover:bg-white/5"
                                                aria-label="Next slide"
                                            >
                                                <ChevronRight size={15} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

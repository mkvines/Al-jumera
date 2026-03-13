"use client";

import { motion } from "framer-motion";

interface HeroProps {
    title: string;
    subtitle?: string;
    description?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero({ title, subtitle, description }: HeroProps) {
    return (
        <section className="relative overflow-hidden bg-white pt-32 pb-16 md:pt-40 md:pb-20 px-6">
            {/* Decorative glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(circle,rgba(107,70,255,0.06)_0%,transparent_60%)] pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                {subtitle && (
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease }}
                    >
                        <span className="pill-badge">{subtitle}</span>
                    </motion.div>
                )}

                <motion.h1
                    className="text-3xl md:text-5xl font-bold text-dark mt-5 tracking-tight leading-tight"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease }}
                >
                    {title}
                </motion.h1>

                {description && (
                    <motion.p
                        className="mt-5 text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35, ease }}
                    >
                        {description}
                    </motion.p>
                )}

                {/* Decorative bottom line */}
                <motion.div
                    className="mt-10 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-purple/40 to-transparent"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease }}
                />
            </div>
        </section>
    );
}

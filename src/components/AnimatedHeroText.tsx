"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

const phraseKeys = [
    "heroText.comfort",
    "heroText.excellence",
    "heroText.innovation",
    "heroText.reliability",
    "heroText.precision"
];

export default function AnimatedHeroText() {
    const [index, setIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const { t, locale } = useLanguage();

    useEffect(() => {
        setIsMounted(true);
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % phraseKeys.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const widthClass = locale === "ar" ? "w-[6em]" : "w-[5em]";

    // Prevent hydration mismatch: render a static invisible placeholder during SSR
    if (!isMounted) {
        return (
            <span className={`inline-block relative ${widthClass} text-left rtl:text-right`}>
                <span className="invisible serif-accent" aria-hidden="true">{t("heroText.innovation")}</span>
            </span>
        );
    }

    return (
        <span className={`inline-block relative ${widthClass} text-left rtl:text-right`}>
            <AnimatePresence mode="popLayout">
                <motion.span
                    key={`${locale}-${index}`}
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        mass: 1,
                    }}
                    className="absolute left-0 rtl:right-0 rtl:left-auto serif-accent text-gradient"
                >
                    {t(phraseKeys[index])}
                </motion.span>
            </AnimatePresence>
            {/* Invisible placeholder to maintain layout width and height */}
            <span className="invisible serif-accent" aria-hidden="true">{t("heroText.innovation")}</span>
        </span>
    );
}

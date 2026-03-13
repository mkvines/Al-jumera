"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
    "Comfort",
    "Excellence",
    "Innovation",
    "Reliability",
    "Precision"
];

export default function AnimatedHeroText() {
    const [index, setIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 3000); // Change word every 3 seconds

        return () => clearInterval(interval);
    }, []);

    // Prevent hydration mismatch: render a static invisible placeholder during SSR
    if (!isMounted) {
        return (
            <span className="inline-block relative w-[5em] text-left">
                <span className="invisible serif-accent" aria-hidden="true">Innovation</span>
            </span>
        );
    }

    return (
        <span className="inline-block relative w-[5em] text-left">
            <AnimatePresence mode="popLayout">
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        mass: 1,
                    }}
                    className="absolute left-0 serif-accent text-gradient"
                >
                    {phrases[index]}
                </motion.span>
            </AnimatePresence>
            {/* Invisible placeholder to maintain layout width and height */}
            <span className="invisible serif-accent" aria-hidden="true">Innovation</span>
        </span>
    );
}

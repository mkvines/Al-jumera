"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/* ─── Shared Variants ─── */
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
};

const slideInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
};

const variantMap = {
    "fade-up": fadeInUp,
    "fade-in": fadeIn,
    "scale-in": scaleIn,
    "slide-left": slideInLeft,
    "slide-right": slideInRight,
};

type AnimationType = keyof typeof variantMap;

/* ─── AnimateOnScroll ─── */
interface AnimateOnScrollProps {
    children: ReactNode;
    animation?: AnimationType;
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
}

export function AnimateOnScroll({
    children,
    animation = "fade-up",
    delay = 0,
    duration = 0.6,
    className = "",
    once = true,
}: AnimateOnScrollProps) {
    return (
        <motion.div
            variants={variantMap[animation]}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-80px" }}
            transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* ─── StaggerContainer ─── */
interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    once?: boolean;
}

const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.12,
    once = true,
}: StaggerContainerProps) {
    return (
        <motion.div
            variants={{
                hidden: {},
                visible: {
                    transition: { staggerChildren: staggerDelay },
                },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-60px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* ─── StaggerItem (child of StaggerContainer) ─── */
interface StaggerItemProps {
    children: ReactNode;
    className?: string;
    animation?: AnimationType;
}

export function StaggerItem({
    children,
    className = "",
    animation = "fade-up",
}: StaggerItemProps) {
    return (
        <motion.div
            variants={variantMap[animation]}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* ─── CountUp (for stats) ─── */
interface CountUpProps {
    value: string;
    className?: string;
}

export function CountUp({ value, className = "" }: CountUpProps) {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={className}
        >
            {value}
        </motion.span>
    );
}

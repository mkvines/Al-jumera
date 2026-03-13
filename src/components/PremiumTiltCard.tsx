"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface PremiumTiltCardProps {
    children: React.ReactNode;
    className?: string;
    glareOpacity?: number;
    rotationFactor?: number;
}

export default function PremiumTiltCard({
    children,
    className = "",
    glareOpacity = 0.15,
    rotationFactor = 7, // Higher number = less tilt
}: PremiumTiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    // Mouse position relative to the center of the card
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Mouse coordinates relative to the top-left of the card (for glare)
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth physics
    const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    // Transform raw mouse pixel offset into rotations (in degrees)
    const rotateX = useTransform(springY, [-100, 100], [rotationFactor, -rotationFactor]);
    const rotateY = useTransform(springX, [-100, 100], [-rotationFactor, rotationFactor]);

    const [isHovering, setIsHovering] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    // Check if the user is on a touch device to disable the physics
    useEffect(() => {
        setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    }, []);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        if (isTouchDevice || !ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        
        // Calculate raw pixel offset from center
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(event.clientX - centerX);
        y.set(event.clientY - centerY);

        // Calculate offset from top-left for the glare overlay
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
    }

    function handleMouseEnter() {
        if (!isTouchDevice) {
            setIsHovering(true);
        }
    }

    function handleMouseLeave() {
        if (!isTouchDevice) {
            setIsHovering(false);
            // Slowly reset back to center
            x.set(0);
            y.set(0);
            mouseX.set(0);
            mouseY.set(0);
        }
    }

    // Static fallback for mobile/touch devices
    if (isTouchDevice) {
        return (
            <div className={`relative ${className}`}>
                {children}
            </div>
        );
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
            }}
            className={`relative group ${className}`}
        >
            {/* The actual content (preserves 3d context so inner items can pop out) */}
            <div style={{ transform: "translateZ(30px)" }} className="w-full h-full relative z-10">
                {children}
            </div>

            {/* Premium Dynamic Glare Overlay */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] transition-opacity duration-300"
                style={{
                    opacity: isHovering ? 1 : 0,
                    background: useTransform(
                        [mouseX, mouseY],
                        ([latestX, latestY]) => `radial-gradient(
                            600px circle at ${latestX}px ${latestY}px, 
                            rgba(255,255,255,${glareOpacity}),
                            transparent 40%
                        )`
                    ),
                    mixBlendMode: "overlay",
                }}
            />

            {/* Subtle Gradient Border Glow that follows mouse */}
            <motion.div
                className="pointer-events-none absolute -inset-px z-30 rounded-[inherit] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{
                     background: useTransform(
                        [mouseX, mouseY],
                        ([latestX, latestY]) => `radial-gradient(
                            400px circle at ${latestX}px ${latestY}px, 
                            rgba(107, 70, 255, 0.4),
                            transparent 40%
                        )`
                    ),
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "1px", // Border thickness
                }}
            />
        </motion.div>
    );
}

"use client";

import { motion } from "framer-motion";
import { Ruler, ClipboardCheck, Settings, Fan } from "lucide-react";

interface AnimatedProcessArtProps {
    activeStep: number;
}

export default function AnimatedProcessArt({ activeStep }: AnimatedProcessArtProps) {
    return (
        <div className="w-full h-full bg-slate-50 relative flex items-center justify-center p-4 lg:p-8">
            {/* Ambient Background Glow (Dynamic based on step) */}
            <motion.div
                className="absolute inset-0 opacity-40 blur-3xl pointer-events-none"
                animate={{
                    background:
                        activeStep === 0
                            ? "radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)" // Purple
                            : activeStep === 1
                            ? "radial-gradient(circle at 75% 25%, rgba(16, 185, 129, 0.4) 0%, transparent 50%)" // Emerald
                            : activeStep === 2
                            ? "radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.4) 0%, transparent 50%)" // Amber
                            : "radial-gradient(circle at 25% 75%, rgba(14, 165, 233, 0.4) 0%, transparent 50%)", // Sky
                }}
                transition={{ duration: 1 }}
            />

            {/* Grid overlay for a subtle technical feel (Light mode) */}
            <div
                className="absolute inset-0 opacity-[0.4] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(226, 232, 240, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(226, 232, 240, 1) 1px, transparent 1px)`,
                    backgroundSize: "20px 20px"
                }}
            />

            {/* Container for Flowchart to maintain relative positioning */}
            <div className="relative w-full max-w-[500px] lg:max-w-[550px] aspect-[4/3] md:aspect-video lg:aspect-square flex items-center justify-center">
                
                {/* SVG Canvas for Dotted Curved Arrows */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#cbd5e1" />
                        </marker>
                        <marker id="arrow-active" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#8b5cf6" />
                        </marker>
                        <marker id="arrow-active-2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
                        </marker>
                        <marker id="arrow-active-3" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
                        </marker>
                    </defs>

                    {/* Path 1: Assess -> Design (0 -> 1) */}
                    {/* From (~32, ~25) to (~68, ~25) */}
                    <path
                        d="M 32 25 C 45 10, 55 10, 68 25"
                        fill="none"
                        stroke={activeStep >= 1 ? "#8b5cf6" : "#cbd5e1"}
                        strokeWidth="0.5"
                        strokeDasharray="2 2"
                        markerEnd={`url(${activeStep >= 1 ? '#arrow-active' : '#arrow'})`}
                    />
                    {activeStep >= 1 && (
                        <motion.path
                            d="M 32 25 C 45 10, 55 10, 68 25"
                            fill="none"
                            stroke="#8b5cf6"
                            strokeWidth="0.8"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1 }}
                        />
                    )}

                    {/* Path 2: Design -> Install (1 -> 2) */}
                    {/* From (~75, ~32) to (~75, ~68) */}
                    <path
                        d="M 75 32 C 90 45, 90 55, 75 68"
                        fill="none"
                        stroke={activeStep >= 2 ? "#10b981" : "#cbd5e1"}
                        strokeWidth="0.5"
                        strokeDasharray="2 2"
                        markerEnd={`url(${activeStep >= 2 ? '#arrow-active-2' : '#arrow'})`}
                    />
                    {activeStep >= 2 && (
                        <motion.path
                            d="M 75 32 C 90 45, 90 55, 75 68"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="0.8"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1 }}
                        />
                    )}

                    {/* Path 3: Install -> Optimize (2 -> 3) */}
                    {/* From (~68, ~75) to (~32, ~75) */}
                    <path
                        d="M 68 75 C 55 90, 45 90, 32 75"
                        fill="none"
                        stroke={activeStep >= 3 ? "#f59e0b" : "#cbd5e1"}
                        strokeWidth="0.5"
                        strokeDasharray="2 2"
                        markerEnd={`url(${activeStep >= 3 ? '#arrow-active-3' : '#arrow'})`}
                    />
                    {activeStep >= 3 && (
                        <motion.path
                            d="M 68 75 C 55 90, 45 90, 32 75"
                            fill="none"
                            stroke="#f59e0b"
                            strokeWidth="0.8"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1 }}
                        />
                    )}
                </svg>

                {/* Nodes mapped over absolute coordinates matching SVG paths */}
                <Node
                    icon={Ruler}
                    label="Assess"
                    isActive={activeStep === 0}
                    isPast={activeStep > 0}
                    top="25%"
                    left="25%"
                    color="text-purple"
                    bgColor="bg-purple-100"
                    glowColor="rgba(139, 92, 246, 0.5)"
                    borderColor="border-purple/40"
                    pulseColor="bg-purple-400"
                />
                
                <Node
                    icon={ClipboardCheck}
                    label="Design"
                    isActive={activeStep === 1}
                    isPast={activeStep > 1}
                    top="25%"
                    left="75%"
                    color="text-emerald-500"
                    bgColor="bg-emerald-100"
                    glowColor="rgba(16, 185, 129, 0.5)"
                    borderColor="border-emerald-500/40"
                    pulseColor="bg-emerald-400"
                />
                
                <Node
                    icon={Settings}
                    label="Install"
                    isActive={activeStep === 2}
                    isPast={activeStep > 2}
                    top="75%"
                    left="75%"
                    color="text-amber-500"
                    bgColor="bg-amber-100"
                    glowColor="rgba(245, 158, 11, 0.5)"
                    borderColor="border-amber-500/40"
                    pulseColor="bg-amber-400"
                />

                <Node
                    icon={Fan}
                    label="Optimize"
                    isActive={activeStep === 3}
                    isPast={false}
                    top="75%"
                    left="25%"
                    color="text-sky-500"
                    bgColor="bg-sky-100"
                    glowColor="rgba(14, 165, 233, 0.5)"
                    borderColor="border-sky-500/40"
                    pulseColor="bg-sky-400"
                />
            </div>
        </div>
    );
}

// Subcomponent for each interactive process node
function Node({ icon: Icon, label, isActive, isPast, top, left, color, bgColor, glowColor, borderColor, pulseColor }: any) {
    return (
        <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10"
            style={{ top, left }}
        >
            {/* Pulsing ring when active */}
            {isActive && (
                <motion.div
                    animate={{ scale: [1, 1.8], opacity: [0.8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    className={`absolute inset-0 rounded-2xl ${pulseColor} -z-10`}
                />
            )}

            <motion.div
                animate={isActive ? { scale: [1, 1.1, 1], boxShadow: `0 0 40px ${glowColor}` } : { scale: 1, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}
                transition={{ duration: 2.5, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
                className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center border backdrop-blur-xl transition-all duration-500 ${
                    isActive ? `bg-white ${borderColor} scale-110 z-20` 
                    : isPast ? `${bgColor} ${borderColor} opacity-90` 
                    : "bg-white border-slate-200 opacity-60 grayscale"
                }`}
            >
                <Icon className={`w-6 h-6 md:w-8 md:h-8 transition-colors duration-500 ${isActive ? color : isPast ? color : "text-slate-400"}`} />
            </motion.div>
            
            <motion.div
                initial={false}
                animate={{ 
                    opacity: isActive ? 1 : isPast ? 0.7 : 0.5, 
                    y: isActive ? 8 : 4,
                    scale: isActive ? 1.05 : 1
                }}
                className={`mt-2 text-xs md:text-sm tracking-wide px-3 py-1 rounded-full backdrop-blur-md shadow-sm border ${
                    isActive ? 'font-bold bg-white text-slate-800 border-slate-200' : 'font-medium bg-white/50 text-slate-600 border-transparent'
                }`}
            >
                {label}
            </motion.div>
        </div>
    );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedProcessArt from "./AnimatedProcessArt";
import SectionHeader from "./SectionHeader";
import { StaggerItem } from "./animations";

const PROCESS_STEPS = [
    {
        id: "assess",
        title: "Assessment & Blueprint",
        description: "We inspect your facility and draft highly precise structural and thermal load models.",
    },
    {
        id: "design",
        title: "System Engineering",
        description: "Our engineers architect optimal ducting and calculate freon flow using advanced thermodynamics.",
    },
    {
        id: "install",
        title: "Precision Installation",
        description: "Expert technicians physically map, mount, and weld the hardware securely into your infrastructure.",
    },
    {
        id: "optimize",
        title: "Commission & Chill",
        description: "Sensors are tuned, airflow is optimized, and continuous perfect climate control is achieved.",
    },
];

export default function ProcessSection() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="py-16 md:py-28 px-4 md:px-6 bg-[#FAFAFA] relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeader
                    label="How We Work"
                    title="The Engine Behind the Chill"
                    description="A highly technical, four-step engineering process that guarantees peak HVAC performance."
                />

                <div className="mt-8 md:mt-16 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                    
                    {/* LEFT COLUMN: The Hardware Stepper (2x2 grid on mobile, Vertical on desktop) */}
                    <div className="w-full lg:w-[45%] grid grid-cols-2 lg:flex lg:flex-col gap-3 sm:gap-4 lg:gap-6">
                        {PROCESS_STEPS.map((step, index) => {
                            const isActive = activeStep === index;
                            return (
                                <StaggerItem key={step.id} className="w-full">
                                    <button
                                        onClick={() => setActiveStep(index)}
                                        className="relative w-full text-left outline-none group"
                                    >
                                        {/* Pulsing "waving" aura for the active button */}
                                        {isActive && (
                                            <motion.div
                                                className="absolute inset-0 rounded-[20px] bg-[#a78bfa] z-0"
                                                animate={{ scale: [1, 1.08, 1.15], opacity: [0.6, 0.2, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                                            />
                                        )}

                                        {/* The 3D Physical Button Base (The Shadow Assembly) */}
                                        <div className={`relative z-10 w-full rounded-[20px] transition-all duration-150 ease-out flex flex-col
                                            ${isActive 
                                                ? 'bg-[#4c2d99] translate-y-[6px] pb-0 shadow-[0_0_15px_rgba(139,92,246,0.4)]' 
                                                : 'bg-[#cbd5e1] hover:bg-[#94a3b8] hover:translate-y-[2px] pb-[6px] hover:pb-[4px] shadow-sm'}
                                        `}>
                                            {/* The Top Surface (The Glossy Push Plunger) */}
                                            <div className={`relative w-full h-full rounded-[20px] p-3 sm:p-4 lg:p-6 flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-2 sm:gap-4 border transition-colors duration-150 overflow-hidden
                                                ${isActive 
                                                    ? 'bg-gradient-to-br from-[#a78bfa] to-[#6b46ff] border-[#c4b5fd] shadow-[inset_0_-4px_8px_rgba(0,0,0,0.2),inset_0_4px_8px_rgba(255,255,255,0.4)]' 
                                                    : 'bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] border-white shadow-[inset_0_-4px_8px_rgba(0,0,0,0.05),inset_0_4px_8px_rgba(255,255,255,0.8)]'}
                                            `}>
                                                {/* Gloss/Glare Graphic Effect */}
                                                <div className="absolute top-0 left-[10%] w-[80%] h-[30%] bg-gradient-to-b from-white/70 to-transparent rounded-full opacity-50 blur-[1px] pointer-events-none" />

                                                {/* Embedded Button Number */}
                                                <div className={`shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full font-black text-sm md:text-lg transition-colors duration-150 relative z-10
                                                    ${isActive 
                                                        ? 'bg-white text-[#6b46ff] shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_2px_5px_rgba(0,0,0,0.2)]' 
                                                        : 'bg-[#cbd5e1] text-slate-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_2px_5px_rgba(0,0,0,0.05)]'}
                                                `}>
                                                    {index + 1}
                                                </div>
                                                
                                                {/* Text Content */}
                                                <div className="flex flex-col text-center sm:text-left relative z-10">
                                                    <h3 className={`font-bold text-xs sm:text-sm lg:text-xl tracking-tight transition-colors drop-shadow-sm ${isActive ? "text-white" : "text-slate-800"}`}>
                                                        {step.title}
                                                    </h3>
                                                    {/* Description only visible on desktop to save space on mobile */}
                                                    <p className={`hidden lg:block mt-1 text-sm leading-relaxed transition-colors ${isActive ? "text-white/90" : "text-slate-500"}`}>
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </StaggerItem>
                            );
                        })}
                    </div>

                    {/* RIGHT COLUMN: The Animated Flowchart Canvas */}
                    <div className="w-full lg:w-[55%] h-[320px] sm:h-[400px] lg:h-[550px] relative rounded-[2rem] overflow-hidden bg-white border border-slate-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)]">
                        <AnimatedProcessArt activeStep={activeStep} />
                    </div>

                </div>
            </div>
        </section>
    );
}

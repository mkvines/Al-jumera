"use client";

import { Award, Clock, Building2, Shield } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./animations";

const stats = [
    { icon: Clock, value: "25+", label: "Years Experience", bgColor: "bg-lavender" },
    { icon: Building2, value: "200+", label: "Projects Completed", bgColor: "bg-purple/5" },
    { icon: Award, value: "7+", label: "Major Brands", bgColor: "bg-lavender" },
    { icon: Shield, value: "100%", label: "Client Satisfaction", bgColor: "bg-purple/5" },
];

export default function StatsSection() {
    return (
        <section className="py-20 px-6 bg-white relative overflow-hidden">
            {/* Subtle background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-purple/3 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <StaggerItem key={stat.label}>
                                <div className="text-center group cursor-default">
                                    <div className={`w-18 h-18 mx-auto mb-5 ${stat.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-400 icon-glow relative`}>
                                        <Icon className="w-8 h-8 text-purple transition-transform duration-300 group-hover:scale-110" />
                                    </div>
                                    <div className="text-4xl md:text-5xl font-extrabold text-dark mb-2 tracking-tight">
                                        {stat.value}
                                    </div>
                                    <div className="text-muted text-sm font-medium tracking-wide uppercase">
                                        {stat.label}
                                    </div>
                                </div>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>
            </div>
        </section>
    );
}

"use client";

import {
    Briefcase,
    HardHat,
    User,
    TrendingUp,
    Calculator,
    FileText,
    Building2,
    Users,
    Wrench,
    Wind,
    Pipette,
    Shield,
    Truck,
    Coffee,
    Eye,
} from "lucide-react";

const managementTeam = [
    { role: "General Manager", qty: 1, icon: Briefcase },
    { role: "Sales Manager", qty: 1, icon: TrendingUp },
    { role: "Project Manager", qty: 1, icon: User },
    { role: "Project Engineers", subtitle: "HVAC / Fire Fighting / Electrical / Plumbing", qty: 2, icon: Building2 },
    { role: "Finance Manager", qty: 1, icon: Calculator },
    { role: "Accountant", qty: 1, icon: FileText },
    { role: "Office Secretary", qty: 1, icon: FileText },
    { role: "Site Engineer", qty: 1, icon: HardHat },
    { role: "Site Supervisor", qty: 3, icon: Users },
];

const technicalTeam = [
    { role: "A/C Technician – Installation", qty: 2, icon: Wrench },
    { role: "A/C Technician – Maintenance", qty: 2, icon: Wrench },
    { role: "Duct Fabrications", qty: 2, icon: Wind },
    { role: "Duct Erectors", qty: 2, icon: HardHat },
    { role: "Ducts / Pipe Insulators", qty: 2, icon: Pipette },
    { role: "Skilled Labors", qty: 4, icon: Shield },
    { role: "Semi Skilled Labors", qty: 4, icon: Users },
    { role: "Drivers", qty: 2, icon: Truck },
    { role: "Office Boy", qty: 1, icon: Coffee },
    { role: "Watch Man (Guard)", qty: 1, icon: Eye },
];

const totalManagement = managementTeam.reduce((sum, m) => sum + m.qty, 0);
const totalTechnical = technicalTeam.reduce((sum, m) => sum + m.qty, 0);

export default function ManpowerSection() {
    return (
        <section className="py-20 px-6 bg-white relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple/3 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-lavender rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="pill-badge">Our Workforce</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mt-4 mb-4 tracking-tight">
                        Team & Manpower
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        A dedicated team of {totalManagement + totalTechnical}+ professionals
                        — from certified engineers and project managers to skilled technicians and support staff.
                    </p>
                </div>

                {/* Summary Stats Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
                    {[
                        { label: "Management & Office", count: totalManagement, color: "bg-gradient-to-r from-dark to-dark-light" },
                        { label: "Technical Manpower", count: totalTechnical, color: "bg-gradient-to-r from-purple to-purple-light" },
                        { label: "Total Workforce", count: totalManagement + totalTechnical, color: "bg-gradient-to-r from-purple-dark to-purple" },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="relative rounded-2xl p-6 text-white overflow-hidden group"
                        >
                            <div className={`absolute inset-0 ${stat.color} transition-all duration-500`} />
                            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
                            <div className="relative z-10">
                                <p className="text-3xl md:text-4xl font-bold mb-1">{stat.count}+</p>
                                <p className="text-white/75 text-sm font-medium">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Management & Office */}
                    <div className="bg-lavender-light rounded-2xl border border-border overflow-hidden">
                        <div className="bg-dark px-7 py-5 flex items-center gap-4">
                            <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center">
                                <Briefcase className="w-5 h-5 text-purple-light" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg tracking-tight">
                                    Management & Office
                                </h3>
                                <p className="text-white/50 text-xs">
                                    {totalManagement} professionals
                                </p>
                            </div>
                        </div>

                        <div className="divide-y divide-border/60">
                            {managementTeam.map((member, i) => {
                                const Icon = member.icon;
                                return (
                                    <div
                                        key={i}
                                        className="flex items-center gap-4 px-7 py-4 hover:bg-white/60 transition-colors duration-200 group"
                                    >
                                        <div className="w-9 h-9 bg-lavender group-hover:bg-purple/10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300">
                                            <Icon className="w-4 h-4 text-muted group-hover:text-purple transition-colors duration-300" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-dark font-semibold text-sm">{member.role}</p>
                                            {member.subtitle && (
                                                <p className="text-muted text-xs mt-0.5 truncate">{member.subtitle}</p>
                                            )}
                                        </div>
                                        <span className="inline-flex items-center justify-center w-8 h-8 bg-lavender group-hover:bg-purple text-dark group-hover:text-white text-sm font-bold rounded-lg transition-all duration-300">
                                            {member.qty}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Technical Manpower */}
                    <div className="bg-lavender-light rounded-2xl border border-border overflow-hidden">
                        <div className="bg-purple px-7 py-5 flex items-center gap-4">
                            <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center">
                                <HardHat className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg tracking-tight">
                                    Technical Manpower
                                </h3>
                                <p className="text-white/50 text-xs">
                                    {totalTechnical} professionals
                                </p>
                            </div>
                        </div>

                        <div className="divide-y divide-border/60">
                            {technicalTeam.map((member, i) => {
                                const Icon = member.icon;
                                return (
                                    <div
                                        key={i}
                                        className="flex items-center gap-4 px-7 py-4 hover:bg-white/60 transition-colors duration-200 group"
                                    >
                                        <div className="w-9 h-9 bg-purple/5 group-hover:bg-purple/10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300">
                                            <Icon className="w-4 h-4 text-purple/50 group-hover:text-purple transition-colors duration-300" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-dark font-semibold text-sm">{member.role}</p>
                                        </div>
                                        <span className="inline-flex items-center justify-center w-8 h-8 bg-purple/5 group-hover:bg-purple text-purple-dark group-hover:text-white text-sm font-bold rounded-lg transition-all duration-300">
                                            {member.qty}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

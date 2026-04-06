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
import { useLanguage } from "@/lib/i18n";

const managementTeamKeys = [
    { roleKey: "role.generalManager", qty: 1, icon: Briefcase },
    { roleKey: "role.salesManager", qty: 1, icon: TrendingUp },
    { roleKey: "role.projectManager", qty: 1, icon: User },
    { roleKey: "role.projectEngineers", subtitleKey: "role.engSubtitle", qty: 2, icon: Building2 },
    { roleKey: "role.financeManager", qty: 1, icon: Calculator },
    { roleKey: "role.accountant", qty: 1, icon: FileText },
    { roleKey: "role.officeSecretary", qty: 1, icon: FileText },
    { roleKey: "role.siteEngineer", qty: 1, icon: HardHat },
    { roleKey: "role.siteSupervisor", qty: 3, icon: Users },
];

const technicalTeamKeys = [
    { roleKey: "role.acTechInstall", qty: 2, icon: Wrench },
    { roleKey: "role.acTechMaint", qty: 2, icon: Wrench },
    { roleKey: "role.ductFab", qty: 2, icon: Wind },
    { roleKey: "role.ductErect", qty: 2, icon: HardHat },
    { roleKey: "role.pipeInsulators", qty: 2, icon: Pipette },
    { roleKey: "role.skilledLabor", qty: 4, icon: Shield },
    { roleKey: "role.semiSkilled", qty: 4, icon: Users },
    { roleKey: "role.drivers", qty: 2, icon: Truck },
    { roleKey: "role.officeBoy", qty: 1, icon: Coffee },
    { roleKey: "role.watchMan", qty: 1, icon: Eye },
];

const totalManagement = managementTeamKeys.reduce((sum, m) => sum + m.qty, 0);
const totalTechnical = technicalTeamKeys.reduce((sum, m) => sum + m.qty, 0);

export default function ManpowerSection() {
    const { t } = useLanguage();

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
                    <span className="pill-badge">{t("manpower.badge")}</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mt-4 mb-4 tracking-tight">
                        {t("manpower.title")}
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        {t("manpower.descPrefix")} {totalManagement + totalTechnical}+ {t("manpower.descSuffix")}
                    </p>
                </div>

                {/* Summary Stats Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
                    {[
                        { labelKey: "manpower.mgmtOffice", count: totalManagement, color: "bg-gradient-to-r from-dark to-dark-light" },
                        { labelKey: "manpower.techManpower", count: totalTechnical, color: "bg-gradient-to-r from-purple to-purple-light" },
                        { labelKey: "manpower.totalWorkforce", count: totalManagement + totalTechnical, color: "bg-gradient-to-r from-purple-dark to-purple" },
                    ].map((stat) => (
                        <div
                            key={stat.labelKey}
                            className="relative rounded-2xl p-6 text-white overflow-hidden group"
                        >
                            <div className={`absolute inset-0 ${stat.color} transition-all duration-500`} />
                            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
                            <div className="relative z-10">
                                <p className="text-3xl md:text-4xl font-bold mb-1">{stat.count}+</p>
                                <p className="text-white/75 text-sm font-medium">{t(stat.labelKey)}</p>
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
                                    {t("manpower.mgmtOffice")}
                                </h3>
                                <p className="text-white/50 text-xs">
                                    {totalManagement} {t("manpower.professionals")}
                                </p>
                            </div>
                        </div>

                        <div className="divide-y divide-border/60">
                            {managementTeamKeys.map((member, i) => {
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
                                            <p className="text-dark font-semibold text-sm">{t(member.roleKey)}</p>
                                            {member.subtitleKey && (
                                                <p className="text-muted text-xs mt-0.5 truncate">{t(member.subtitleKey)}</p>
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
                                    {t("manpower.techManpower")}
                                </h3>
                                <p className="text-white/50 text-xs">
                                    {totalTechnical} {t("manpower.professionals")}
                                </p>
                            </div>
                        </div>

                        <div className="divide-y divide-border/60">
                            {technicalTeamKeys.map((member, i) => {
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
                                            <p className="text-dark font-semibold text-sm">{t(member.roleKey)}</p>
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

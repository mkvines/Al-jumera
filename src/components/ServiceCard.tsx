import {
    Snowflake,
    Wind,
    Gauge,
    Box,
    Fan,
    Wrench,
    MonitorPlay,
    Layout,
    BarChart,
    Settings,
    Smartphone,
} from "lucide-react";
import type { Service } from "@/data/services";
import PremiumTiltCard from "./PremiumTiltCard";

const iconMap: Record<string, React.ElementType> = {
    Snowflake,
    Wind,
    Gauge,
    Box,
    Fan,
    Wrench,
    MonitorPlay,
    Layout,
    BarChart,
    Settings,
    Smartphone,
};

export default function ServiceCard({ service }: { service: Service }) {
    const Icon = iconMap[service.icon] || Box;

    return (
        <PremiumTiltCard className="card-premium h-full flex flex-col rounded-[1.25rem]">
            <div className="p-5 md:p-8 flex flex-col items-start flex-1 w-full h-full relative z-10 transition-colors duration-500 hover:bg-white/5">
                <div className="w-11 h-11 md:w-14 md:h-14 bg-lavender group-hover:bg-lavender-dark rounded-xl flex items-center justify-center mb-4 md:mb-6 transition-all duration-300 icon-glow relative shrink-0">
                    <Icon className="w-5 h-5 md:w-7 md:h-7 text-purple transition-transform duration-300 group-hover:scale-110" />
                </div>

            <h3 className="text-[14px] md:text-lg font-bold text-dark mb-2 md:mb-3 tracking-tight group-hover:text-purple transition-colors duration-300 line-clamp-2">
                {service.title}
            </h3>
                <p className="text-muted leading-relaxed text-[12px] md:text-sm line-clamp-3 md:line-clamp-none">
                    {service.description}
                </p>
            </div>
        </PremiumTiltCard>
    );
}

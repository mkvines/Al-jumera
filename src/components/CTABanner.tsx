"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

interface CTABannerProps {
    title?: string;
    description?: string;
    buttonLabel?: string;
    buttonHref?: string;
}

export default function CTABanner({
    title,
    description,
    buttonLabel,
    buttonHref = "/contact",
}: CTABannerProps) {
    const { t } = useLanguage();

    const displayTitle = title || t("ctaBanner.title");
    const displayDesc = description || t("ctaBanner.desc");
    const displayButton = buttonLabel || t("ctaBanner.button");

    return (
        <section className="py-20 px-6">
            <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple via-purple-dark to-purple">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-purple-light/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full blur-[80px]" />
                </div>

                {/* Content */}
                <div className="relative z-10 px-8 md:px-16 py-16 md:py-20 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        {displayTitle}
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                        {displayDesc}
                    </p>
                    <Link
                        href={buttonHref}
                        className="inline-block bg-white text-purple hover:text-purple-dark px-10 py-4 rounded-full text-base font-semibold tracking-wide transition-all hover:shadow-xl hover:shadow-white/20 hover:-translate-y-0.5"
                    >
                        {displayButton}
                    </Link>
                </div>
            </div>
        </section>
    );
}

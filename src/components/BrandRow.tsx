"use client";

import Image from "next/image";
import { BRANDS } from "@/lib/constants";
import { AnimateOnScroll } from "./animations";

export default function BrandRow() {
    const allBrands = [...BRANDS, ...BRANDS];

    return (
        <section className="py-10 bg-white overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <AnimateOnScroll animation="fade-in" duration={0.8}>
                <div className="flex items-center animate-marquee whitespace-nowrap">
                    {allBrands.map((brand, i) => (
                        <div
                            key={`${brand.name}-${i}`}
                            className="inline-flex items-center justify-center mx-8 md:mx-14 shrink-0"
                        >
                            <Image
                                src={brand.logo}
                                alt={`${brand.name} logo`}
                                width={120}
                                height={48}
                                className="h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-500"
                            />
                        </div>
                    ))}
                </div>
            </AnimateOnScroll>
        </section>
    );
}

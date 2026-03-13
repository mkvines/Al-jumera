"use client";

import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import BrandRow from "@/components/BrandRow";
import ProcessSection from "@/components/ProcessSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import {
  ArrowRight,
  Shield,
  Users,
  Award,
  HardHat,
  Cpu,
  Zap,
} from "lucide-react";
import { StaggerContainer, StaggerItem, AnimateOnScroll } from "@/components/animations";

const whyChooseUs = [
  {
    icon: Award,
    title: "25+ Years of Expertise",
    desc: "Decades of proven track record delivering complex HVAC projects across Saudi Arabia.",
  },
  {
    icon: Users,
    title: "Professional Team",
    desc: "Certified engineers and technicians trained on the latest HVAC technologies and best practices.",
  },
  {
    icon: Cpu,
    title: "Global Brand Expertise",
    desc: "Authorized specialists for TRANE, DAIKIN, Carrier, LG, Gree, YORK, and Zamil systems.",
  },
  {
    icon: Shield,
    title: "Quality & Safety First",
    desc: "Rigorous quality control and full compliance with Saudi safety regulations on every project.",
  },
  {
    icon: HardHat,
    title: "Full Manpower & Resources",
    desc: "In-house teams with their own tools, transport, and equipment — no subcontractor delays.",
  },
  {
    icon: Zap,
    title: "End-to-End Service",
    desc: "From initial consultation and design through installation, commissioning, and long-term maintenance.",
  },
];

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      {/* ─── HERO SLIDER ─── */}
      <HeroSlider />

      {/* ─── SERVICES ─── */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-slate-50 relative overflow-hidden">
        {/* Subtle bg glow for glassmorphism */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeader
            label="What We Do"
            title="Our HVAC Services"
            description="Comprehensive climate control solutions — from precision installation to ongoing maintenance."
          />
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <AnimateOnScroll animation="fade-up" delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-purple hover:text-purple-dark font-semibold text-sm transition-colors group"
              >
                View All Services
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── BRANDS STRIP ─── */}
      <BrandRow />

      {/* ─── FEATURED PROJECTS ─── */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-lavender-light/50 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-white/60 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeader
            label="Our Portfolio"
            title="Featured Projects"
            description="Recent installations across Saudi Arabia — from pharmaceutical warehouses to university campuses."
          />
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <AnimateOnScroll animation="fade-up" delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-purple hover:text-purple-dark font-semibold text-sm transition-colors group"
              >
                View All Projects
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── HOW WE WORK (ANIMATED ART PROCESS) ─── */}
      <ProcessSection />

      {/* ─── CLIENT TESTIMONIALS ─── */}
      <TestimonialSection />

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-50/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeader
            label="Why Us"
            title="Why Choose AL-JUMERAH ATQAAN"
            description="We combine decades of HVAC expertise with global brand partnerships to deliver unmatched quality."
          />
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div className="card-premium p-4 md:p-7 group h-full flex flex-col">
                    <div className="flex flex-col md:flex-row items-start md:gap-5">
                      <div className="w-10 h-10 md:w-12 h-12 bg-lavender group-hover:bg-lavender-dark rounded-xl flex items-center justify-center shrink-0 mb-3 md:mb-0 transition-all duration-300 icon-glow relative">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-purple" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[13px] md:text-base font-bold text-dark mb-1.5 tracking-tight group-hover:text-purple transition-colors duration-300 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-muted text-[11px] md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <CTASection />
    </>
  );
}

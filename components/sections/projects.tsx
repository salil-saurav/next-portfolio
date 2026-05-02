"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code, DatabaseZap, Gauge, PlugZap } from "lucide-react";
import { projects } from "@/data/profile";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

const accents: Record<string, { border: string; text: string; bg: string; icon: typeof Code }> = {
  mint: {
    border: "border-mint/[0.28]",
    text: "text-mint",
    bg: "bg-mint/10",
    icon: Gauge
  },
  aqua: {
    border: "border-aqua/[0.28]",
    text: "text-aqua",
    bg: "bg-aqua/10",
    icon: PlugZap
  },
  amber: {
    border: "border-amber/[0.28]",
    text: "text-amber",
    bg: "bg-amber/10",
    icon: DatabaseZap
  }
};

export function Projects() {
  return (
    <AnimatedSection id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Portfolio-ready project concepts based on real strengths."
          description="The resume does not list named public projects, so these placeholders are shaped around Salil's production experience and can be replaced with live case studies later."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => {
            const accent = accents[project.accent] ?? accents.mint;
            const Icon = accent.icon;

            return (
              <motion.article
                key={project.title}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className={`group overflow-hidden rounded-lg border ${accent.border} bg-panel/[0.82]`}
              >
                <div className="relative min-h-44 border-b border-white/10 bg-ink p-5">
                  <div className="absolute inset-0 bg-site-grid bg-[length:34px_34px] opacity-35" />
                  <div className="relative flex items-center justify-between">
                    <span className={`rounded-md ${accent.bg} px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] ${accent.text}`}>
                      {project.type}
                    </span>
                    <span className={`grid size-10 place-items-center rounded-md border ${accent.border} ${accent.bg}`}>
                      <Icon className={`size-5 ${accent.text}`} aria-hidden="true" />
                    </span>
                  </div>
                  <div className="relative mt-10 grid grid-cols-4 gap-2">
                    {Array.from({ length: 8 }).map((_, cellIndex) => (
                      <span
                        key={cellIndex}
                        className={`h-8 rounded-md border border-white/10 bg-white/[0.055] ${
                          cellIndex === index + 1 ? accent.bg : ""
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className={`mt-1 size-5 shrink-0 ${accent.text} transition group-hover:translate-x-1 group-hover:-translate-y-1`}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-4 min-h-24 leading-7 text-white/[0.66]">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/[0.055] px-3 py-2 text-xs font-semibold text-white/[0.68]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

"use client";

import { motion } from "framer-motion";
import { Building2, CheckCircle2 } from "lucide-react";
import { experience } from "@/data/experience";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  return (
    <AnimatedSection id="experience" aria-label="Experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="I build and ship production-grade web applications."
          description="From WordPress plugin systems to Laravel back-end modules, I've worked on APIs, performance optimization, SEO tooling, and solving real-world production challenges."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-white/[0.12] md:block" />
          <div className="space-y-6">
            {experience.map((job, index) => (
              <motion.article
                key={`${job.role}-${job.period}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative rounded-lg border border-border-primary bg-surface-card p-6 md:ml-12 md:p-8"
              >
                <span className="absolute -left-[3.45rem] top-8 hidden size-8 place-items-center rounded-md border border-mint/[0.35] bg-ink text-mint md:grid">
                  <Building2 className="size-4" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-text-primary">{job.role}</h3>
                    <p className="mt-2 text-text-secondary">
                      {job.company} - {job.location}
                    </p>
                  </div>
                  <span className="w-fit rounded-md border border-aqua/[0.24] bg-aqua/10 px-3 py-2 text-sm font-semibold text-aqua">
                    {job.period}
                  </span>
                </div>

                <ul className="mt-6 grid gap-3">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-7 text-text-secondary">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-mint" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

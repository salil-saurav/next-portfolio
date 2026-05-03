"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/profile";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

const barColors: Record<string, string> = {
  "text-aqua": "bg-aqua",
  "text-mint": "bg-mint",
  "text-amber": "bg-amber",
  "text-coral": "bg-coral"
};

export function Skills() {
  return (
    <AnimatedSection id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="The stack I use to ship scalable web applications."
          description="My core expertise lies in WordPress engineering, Laravel, API integrations, and database-driven systems, supported by React and Node.js."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, groupIndex) => {
            const Icon = group.icon;
            const bar = barColors[group.color] ?? "bg-mint";

            return (
              <motion.article
                key={group.title}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className="rounded-lg border border-white/10 bg-panel/[0.78] p-5 shadow-xl shadow-black/20"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/[0.48]">0{groupIndex + 1}</p>
                    <h3 className="mt-1 font-display text-2xl font-semibold text-white">
                      {group.title}
                    </h3>
                  </div>
                  <span className="grid size-11 place-items-center rounded-md border border-white/10 bg-white/[0.07]">
                    <Icon className={`size-5 ${group.color}`} aria-hidden="true" />
                  </span>
                </div>

                <div className="space-y-5">
                  {group.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                        <span className="font-medium text-white/[0.78]">{skill.name}</span>
                        <span className="text-white/[0.44]">{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/[0.08]">
                        <motion.div
                          className={`h-full rounded-full ${bar}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.08 * groupIndex, duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

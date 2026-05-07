"use client";

import { motion, easeOut } from "framer-motion";
import { ArrowRight, BadgeCheck, Mail, MapPin, Rocket } from "lucide-react";
import { profile } from "@/data/profile";
import { stats } from "@/data/navigation";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 }
  }
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } }
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 md:pb-28 md:pt-32 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-md border border-border-primary bg-surface-card px-3 py-2 text-sm text-text-secondary"
          >
            <Rocket className="size-4 text-mint" aria-hidden="true" />
            Back-end focused full-stack developer
          </motion.div>

          <motion.h1
            variants={item}
            className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] text-text-primary sm:text-6xl lg:text-7xl"
          >
            I build fast, scalable, and maintainable web systems.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary sm:text-xl"
          >
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-mint px-5 py-3 text-sm font-bold text-ink transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-mint/70"
            >
              View work
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${profile.email}?subject=Portfolio%20Inquiry`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border-primary bg-surface-card px-5 py-3 text-sm font-bold text-text-primary transition hover:bg-surface-card-hover focus:outline-none focus:ring-2 focus:ring-mint/70"
            >
              <Mail className="size-4" aria-hidden="true" />
              Contact
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border-primary px-5 py-3 text-sm font-bold text-text-secondary transition hover:border-aqua/40 hover:text-aqua focus:outline-none focus:ring-2 focus:ring-aqua/70"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a3 3 0 0 0-6 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3 text-sm text-text-muted"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-coral" aria-hidden="true" />
              {profile.location}
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
            <span>Available for product and back-end focused teams</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.16 }}
          className="relative"
        >
            <div className="rounded-lg border border-border-primary bg-panel/[0.86] p-4 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="mb-4 flex items-center justify-between border-b border-border-primary pb-3">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-coral" />
                <span className="size-3 rounded-full bg-amber" />
                <span className="size-3 rounded-full bg-mint" />
              </div>
            </div>

              <div className="space-y-4 font-mono text-sm leading-7 text-text-secondary">
              <p>
                <span className="text-coral">const</span>{" "}
                <span className="text-aqua">developer</span> = {"{"}
              </p>
              <p className="pl-4">
                role: <span className="text-mint">&quot;{profile.role}&quot;</span>,
              </p>
              <p className="pl-4">
                stack: <span className="text-amber">[&quot;Wordpress&quot;, &quot;Laravel&quot;, &quot;React&quot;, &quot;Node&quot;]</span>,
              </p>
              <p className="pl-4">
                style: <span className="text-mint">&quot;clean, scalable, pragmatic&quot;</span>,
              </p>
              <p className="pl-4">
                focus: <span className="text-aqua">&quot;APIs + databases + performance&quot;</span>
              </p>
              <p>{"}"}</p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {profile.focus.map((focus) => (
                <motion.div
                  key={focus}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-2 rounded-md border border-border-primary bg-surface-card p-3 text-sm text-text-secondary"
                >
                  <BadgeCheck className="size-4 shrink-0 text-mint" aria-hidden="true" />
                  {focus}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl gap-3 px-0 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.45 }}
            className="rounded-lg border border-border-primary bg-surface-card p-5 backdrop-blur"
          >
              <p className="font-display text-3xl font-semibold text-text-primary">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-text-muted">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

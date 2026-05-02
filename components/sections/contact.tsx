"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { contactMethods, profile } from "@/data/profile";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact() {
  const [status, setStatus] = useState("Email integration placeholder ready.");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Thanks. Connect this form to EmailJS, Resend, Nodemailer, or a Next.js route handler.");
  }

  return (
    <AnimatedSection id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Have a system to build, extend, or optimize?"
          description="Use the contact UI as a polished front-end now, then wire the submit handler to your preferred email provider when ready."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg border border-white/10 bg-panel/[0.82] p-6 md:p-8">
            <h3 className="font-display text-2xl font-semibold text-white">Reach Salil</h3>
            <p className="mt-4 leading-7 text-white/[0.66]">
              Best fit: Laravel, WordPress, Node.js, APIs, databases, SEO tooling, and
              performance-sensitive web applications.
            </p>

            <div className="mt-8 space-y-3">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.label === "Location" ? "_blank" : undefined}
                    rel={method.label === "Location" ? "noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-md border border-white/10 bg-white/[0.045] p-4 transition hover:border-mint/[0.35] hover:bg-mint/[0.08]"
                  >
                    <span className="grid size-10 place-items-center rounded-md bg-mint/[0.12] text-mint">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-white/[0.42]">
                        {method.label}
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-white/[0.82]">
                        {method.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-white/10 bg-white/[0.045] p-6 md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-white/[0.72]">
                Name
                <input
                  required
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  className="h-12 rounded-md border border-white/10 bg-ink/70 px-4 text-white outline-none transition placeholder:text-white/[0.28] focus:border-mint/60 focus:ring-2 focus:ring-mint/20"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-white/[0.72]">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="h-12 rounded-md border border-white/10 bg-ink/70 px-4 text-white outline-none transition placeholder:text-white/[0.28] focus:border-mint/60 focus:ring-2 focus:ring-mint/20"
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-semibold text-white/[0.72]">
              Project type
              <select
                name="projectType"
                className="h-12 rounded-md border border-white/10 bg-ink/70 px-4 text-white outline-none transition focus:border-mint/60 focus:ring-2 focus:ring-mint/20"
                defaultValue="backend"
              >
                <option value="backend">Back-end / API development</option>
                <option value="wordpress">WordPress plugin or theme</option>
                <option value="fullstack">Full-stack web application</option>
                <option value="performance">Performance or SEO tooling</option>
              </select>
            </label>

            <label className="mt-5 grid gap-2 text-sm font-semibold text-white/[0.72]">
              Message
              <textarea
                required
                name="message"
                rows={6}
                placeholder="Tell Salil what you want to build."
                className="resize-none rounded-md border border-white/10 bg-ink/70 px-4 py-3 text-white outline-none transition placeholder:text-white/[0.28] focus:border-mint/60 focus:ring-2 focus:ring-mint/20"
              />
            </label>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-white/[0.48]" aria-live="polite">
                {status}
              </p>
              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-mint px-5 py-3 text-sm font-bold text-ink transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-mint/70"
              >
                <Send className="size-4" aria-hidden="true" />
                Send message
              </motion.button>
            </div>

            <p className="mt-5 text-xs leading-6 text-white/[0.38]">
              Placeholder target: connect this form to an API route that sends mail to{" "}
              <a className="text-mint underline-offset-4 hover:underline" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}

"use client";

import { motion } from "framer-motion";
import { Menu, Send, X } from "lucide-react";
import { useState } from "react";
import { navItems, profile } from "@/data/profile";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-ink/[0.72] backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-lg border border-white/[0.12] bg-white/[0.07] font-display text-sm font-bold text-mint shadow-glow">
            SS
          </span>
          <span className="hidden text-sm font-semibold text-white sm:inline">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/[0.66] transition hover:bg-white/[0.08] hover:text-white focus:outline-none focus:ring-2 focus:ring-mint/70"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${profile.email}?subject=Portfolio%20Inquiry`}
          className="hidden items-center gap-2 rounded-md border border-mint/30 bg-mint/[0.12] px-3 py-2 text-sm font-semibold text-mint transition hover:bg-mint/[0.18] focus:outline-none focus:ring-2 focus:ring-mint/70 md:flex"
        >
          <Send className="size-4" aria-hidden="true" />
          Hire
        </a>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-md border border-white/10 bg-white/[0.07] text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="border-t border-white/[0.08] bg-ink/95 px-4 py-4 md:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-white/75 transition hover:bg-white/[0.08] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}

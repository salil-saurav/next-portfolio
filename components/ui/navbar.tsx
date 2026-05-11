"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }

      if (e.key === "Tab") {
        const links = menuRef.current?.querySelectorAll("a");
        if (!links || links.length === 0) return;
        const first = links[0];
        const last = links[links.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          (last as HTMLElement).focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          (first as HTMLElement).focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-muted bg-ink/[0.72] backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-lg border border-border-muted bg-surface-card font-display text-sm font-bold text-mint shadow-glow">
            SS
          </span>
          <span className="hidden text-sm font-semibold text-white sm:inline">
            {profile.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-text-secondary transition hover:bg-surface-card-hover hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-mint/70"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

          <a
            href="/CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-md border border-border-primary bg-surface-card px-3 py-2 text-sm font-semibold text-text-primary transition hover:bg-surface-card-hover focus:outline-none focus:ring-2 focus:ring-mint/70 md:flex"
          >
            Resume
          </a>
          <a
            href={`mailto:${profile.email}?subject=Portfolio%20Inquiry`}
            className="hidden items-center gap-2 rounded-md border border-mint/30 bg-mint/[0.12] px-3 py-2 text-sm font-semibold text-mint transition hover:bg-mint/[0.18] focus:outline-none focus:ring-2 focus:ring-mint/70 md:flex"
          >
            <Send className="size-4" aria-hidden="true" />
            Hire
          </a>
          <ThemeToggle />

        <button
          type="button"
          className="grid size-10 place-items-center rounded-md border border-border-primary bg-surface-card text-text-primary transition hover:bg-surface-card-hover focus:outline-none focus:ring-2 focus:ring-mint/70 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              ref={menuRef}
              role="menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="border-t border-border-muted bg-ink/95 px-4 py-4 md:hidden"
            >
              <ul className="mx-auto grid max-w-7xl gap-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-3 text-sm font-medium text-text-secondary transition hover:bg-surface-card-hover hover:text-text-primary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
    </header>
  );
}

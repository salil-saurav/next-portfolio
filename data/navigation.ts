import type { NavItem, Stat } from "@/lib/types";

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export const stats: Stat[] = [
  { value: "2.5+", label: "Years building production web apps" },
  { value: "PSR-4", label: "Clean PHP architecture standard" },
  { value: "API", label: "Third-party integrations and automation" },
  { value: "SEO", label: "Performance-aware site optimization" }
];

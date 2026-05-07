import type { SkillGroup, ToolbeltItem } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    color: "text-aqua",
    items: [
      { name: "JavaScript", level: 94 },
      { name: "PHP", level: 90 },
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 86 }
    ]
  },
  {
    title: "Frameworks",
    color: "text-mint",
    items: [
      { name: "Laravel", level: 90 },
      { name: "React.js", level: 84 },
      { name: "Node.js", level: 78 },
      { name: "Express.js", level: 76 }
    ]
  },
  {
    title: "Databases",
    color: "text-amber",
    items: [
      { name: "MySQL", level: 86 },
      { name: "PostgreSQL", level: 78 },
      { name: "SQLite", level: 74 },
      { name: "MongoDB", level: 72 }
    ]
  },
  {
    title: "Platforms",
    color: "text-coral",
    items: [
      { name: "WordPress", level: 91 },
      { name: "Azure", level: 70 },
      { name: "GitLab CI/CD", level: 74 },
      { name: "REST APIs", level: 88 }
    ]
  }
];

export const toolbelt: ToolbeltItem[] = [
  { label: "Composer" },
  { label: "WP-CLI" },
  { label: "CLI" },
  { label: "GitLab CI/CD" },
  { label: "Azure" },
  { label: "Docker" },
  { label: "Git" },
  { label: "Custom Plugins" },
  { label: "Reusable Services" },
  { label: "SEO Tooling" }
];

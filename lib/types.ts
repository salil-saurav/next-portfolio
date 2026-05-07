import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type SkillItem = {
  name: string;
  level: number;
};

export type SkillGroup = {
  title: string;
  color: string;
  items: SkillItem[];
};

export type ToolbeltItem = {
  label: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
};

export type EducationItem = {
  degree: string;
  school: string;
  date: string;
};

export type ProjectItem = {
  title: string;
  type: string;
  description: string;
  stack: string[];
  accent: string;
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
};

export type ProfileInfo = {
  name: string;
  role: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  portfolio: string;
  summary: string;
  aboutSummary: string;
  focus: string[];
};

import {
  Blocks,
  Braces,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Server,
  Sparkles,
  Workflow
} from "lucide-react";

export const profile = {
  name: "Salil Saurav",
  role: "Full-Stack Developer",
  location: "Gurugram, Haryana",
  phone: "+91 7701990393",
  email: "salilsaurav.work@gmail.com",
  linkedin: "https://www.linkedin.com/in/salil-saurav",
  portfolio: "https://salilsaurav.free.nf",
  summary:
    "Full-stack developer with 2.5 years of experience building scalable, high-performance web applications with clean and maintainable code. Strong in end-to-end development, deployment, database design, and back-end focused problem solving.",
  focus: [
    "Back-end architecture",
    "Laravel service layers",
    "WordPress plugin systems",
    "API integrations",
    "Performance and SEO"
  ]
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export const stats = [
  { value: "2.5+", label: "Years building production web apps" },
  { value: "PSR-4", label: "Clean PHP architecture standard" },
  { value: "API", label: "Third-party integrations and automation" },
  { value: "SEO", label: "Performance-aware site optimization" }
];

export const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    color: "text-aqua",
    items: [
      { name: "JavaScript", level: 88 },
      { name: "PHP", level: 90 },
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 86 }
    ]
  },
  {
    title: "Frameworks",
    icon: Layers3,
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
    icon: Database,
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
    icon: Workflow,
    color: "text-coral",
    items: [
      { name: "WordPress", level: 91 },
      { name: "Azure", level: 70 },
      { name: "GitLab CI/CD", level: 74 },
      { name: "REST APIs", level: 88 }
    ]
  }
];

export const toolbelt = [
  { label: "Git", icon: GitBranch },
  { label: "GitHub", icon: Braces },
  { label: "Postman", icon: Globe2 },
  { label: "Custom Plugins", icon: Blocks },
  { label: "Reusable Services", icon: Server },
  { label: "SEO Tooling", icon: Sparkles }
];

export const experience = [
  {
    role: "Full-stack Developer",
    company: "Digital Web Solutions Pvt. Ltd.",
    location: "Gurugram, Haryana",
    period: "Nov 2023 - Present",
    highlights: [
      "Built custom WordPress plugins and themes from scratch using PSR-4 autoloading standards and OOP principles.",
      "Integrated third-party APIs for location data, analytics, and real-time user-facing functionality.",
      "Developed SEO optimization tools that improved on-page SEO workflows and client search visibility.",
      "Improved site performance through debugging, code reviews, and stability-focused optimization.",
      "Created reusable Laravel service classes and repositories to improve modularity across projects."
    ]
  },
  {
    role: "Trainee Developer",
    company: "Digital Web Solutions Pvt. Ltd.",
    location: "Gurugram, Haryana",
    period: "Aug 2023 - Nov 2023",
    highlights: [
      "Integrated third-party APIs for location services and analytics across client projects.",
      "Assisted in Laravel back-end modules including routes, controllers, and database migrations.",
      "Contributed to WordPress theme customization and plugin development with senior engineering guidance."
    ]
  }
];

export const education = [
  {
    degree: "Postgraduate Diploma in Computer Application",
    school: "Makhanlal Chaturvedi National University",
    date: "May 2021"
  },
  {
    degree: "Bachelor of Computer Application",
    school: "ISBM University",
    date: "Apr 2022"
  }
];

export const projects = [
  {
    title: "SEO Intelligence Toolkit",
    type: "Client Tooling",
    description:
      "A modular SEO utility concept for auditing metadata, page health, schema readiness, and content signals from a single workflow.",
    stack: ["Laravel", "WordPress", "REST APIs", "MySQL"],
    accent: "mint"
  },
  {
    title: "Plugin Architecture Studio",
    type: "WordPress Engineering",
    description:
      "A PSR-4 plugin foundation with service providers, admin modules, API adapters, and reusable components for faster client delivery.",
    stack: ["PHP", "OOP", "WordPress", "Composer"],
    accent: "aqua"
  },
  {
    title: "Laravel API Operations Layer",
    type: "Back-end System",
    description:
      "A clean repository and service-class pattern for integrating external APIs, validating payloads, and isolating business logic.",
    stack: ["Laravel", "PostgreSQL", "Postman", "GitLab CI"],
    accent: "amber"
  }
];

export const contactMethods = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: Phone
  },
  {
    label: "Location",
    value: profile.location,
    href: "https://maps.google.com/?q=Gurugram,Haryana",
    icon: MapPin
  }
];

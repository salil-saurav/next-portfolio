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
  Workflow,
  Package,
  Terminal,
  GitMerge,
  Cloud,
  Container
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
  aboutSummary:
    "I specialize in building structured back-end systems using Laravel, designing reusable service layers, and developing custom WordPress plugins & themes. I work extensively with APIs, database design, and performance optimization to ensure applications are fast, scalable, and easy to maintain.",
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
      { name: "JavaScript", level: 94 },
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
  { label: "Composer", icon: Package },
  { label: "WP-CLI", icon: Terminal },
  { label: "CLI", icon: Terminal },
  { label: "GitLab CI/CD", icon: GitMerge },
  { label: "Azure", icon: Cloud },
  { label: "Docker", icon: Container },
  { label: "Git", icon: GitBranch },
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
    title: "GoSweetSpot Live Shipping Plugin",
    type: "WooCommerce Integration",
    description:
      "A custom WordPress/WooCommerce plugin that fetches real-time shipping rates from the GoSweetSpot API at checkout, presenting customers with multiple carrier options and letting them choose based on cost and delivery preference.",
    stack: ["PHP", "WordPress", "WooCommerce", "GoSweetSpot API", "REST API"],
    accent: "aqua"
  },
  {
    title: "WordPress Performance & Debloater Suite",
    type: "WordPress Plugin",
    description:
      "An all-in-one WordPress plugin for speed and stability — disabling unnecessary core features, reducing HTTP requests, deferring scripts, and applying targeted optimizations to improve load times and Lighthouse scores out of the box.",
    stack: ["PHP", "WordPress", "OOP", "Composer"],
    accent: "mint"
  },
  {
    title: "PSR-4 Plugin & Theme Framework",
    type: "WordPress Engineering",
    description:
      "A fully structured PSR-4 autoloaded foundation for building production-grade WordPress plugins and themes — featuring service providers, admin module separation, hook management, and reusable API adapters for faster, maintainable client delivery.",
    stack: ["PHP", "OOP", "WordPress", "Composer", "PSR-4"],
    accent: "amber"
  },
  {
    title: "Restaurant Discovery via Geolocation",
    type: "Maps API Integration",
    description:
      "Integrated the Google Maps Geolocation API into a web application to let users search, filter, and discover nearby restaurants based on their live location — with map markers, proximity sorting, and dynamic result rendering.",
    stack: ["JavaScript", "Google Maps API", "Geolocation API", "PHP", "MySQL"],
    accent: "coral"
  },
  {
    title: "Multi-Framework Project Contributions",
    type: "Cross-Stack Development",
    description:
      "Contributed across a breadth of production stacks including Next.js, React, Vue, Ruby on Rails, and Django — handling feature development, API integrations, and back-end modules as part of cross-functional teams.",
    stack: ["Next.js", "React", "Vue", "Ruby on Rails", "Django"],
    accent: "violet"
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

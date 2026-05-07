import type { ProjectItem } from "@/lib/types";
import { DatabaseZap, Gauge, Globe2, Layers, PlugZap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const projects: ProjectItem[] = [
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

export const projectIcons: Record<string, LucideIcon> = {
  mint: Gauge,
  aqua: PlugZap,
  amber: DatabaseZap,
  coral: Globe2,
  violet: Layers
};

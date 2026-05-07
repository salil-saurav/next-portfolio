import type { EducationItem, ProfileInfo } from "@/lib/types";
import { SITE_EMAIL, SITE_URL } from "@/lib/constants";

export const profile: ProfileInfo = {
  name: "Salil Saurav",
  role: "Full-Stack Developer",
  location: "Gurugram, Haryana",
  phone: "+91 7701990393",
  email: SITE_EMAIL,
  linkedin: "https://www.linkedin.com/in/salil-saurav",
  portfolio: SITE_URL,
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

export const education: EducationItem[] = [
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

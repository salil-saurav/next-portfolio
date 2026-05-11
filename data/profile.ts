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
    "Full-Stack Developer with hands-on experience building production-ready applications using Laravel, PHP, JavaScript, WordPress, and modern frontend technologies. Skilled in backend architecture, API integrations, and scalable development with a strong focus on clean, maintainable code. Experienced with AI-assisted development workflows.",
  aboutSummary:
    "I specialize in building structured back-end systems using Laravel, designing reusable service layers, and developing custom WordPress plugins & themes. I work extensively with APIs, database design, and performance optimization to ensure applications are fast, scalable, and easy to maintain. I also leverage AI-assisted tools like Cursor and OpenAI to accelerate debugging and implementation.",
  focus: [
    "Back-end architecture",
    "AI-assisted development",
    "WordPress plugin systems",
    "API integrations",
    "Scalable web applications"
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

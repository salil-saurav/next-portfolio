import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "var(--bg-primary)",
          solid: "#06080f"
        },
        panel: "var(--bg-panel)",
        line: "var(--border-primary)",
        mint: "#58e6bd",
        coral: "#ff7a90",
        amber: "#f8c763",
        aqua: "#61d7ff",
        surface: {
          DEFAULT: "var(--bg-secondary)",
          card: "var(--bg-card)",
          "card-hover": "var(--bg-card-hover)"
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(88, 230, 189, 0.16)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "var(--font-inter)", "sans-serif"]
      },
      backgroundImage: {
        "site-grid":
          "linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;

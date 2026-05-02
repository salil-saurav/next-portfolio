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
        ink: "#06080f",
        panel: "#0d111c",
        line: "rgba(255,255,255,0.1)",
        mint: "#58e6bd",
        coral: "#ff7a90",
        amber: "#f8c763",
        aqua: "#61d7ff"
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
          "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;

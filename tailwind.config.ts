import type { Config } from "tailwindcss";

/**
 * ATVAGA Designs – Tailwind CSS configuration
 * ─────────────────────────────────────────────
 * Tailwind v4 uses @theme in globals.css as the *primary* token source.
 * This file is loaded via `@config "./tailwind.config.ts"` in globals.css
 * and serves as the authoritative reference for brand tokens + any plugins.
 *
 * Brand palette:
 *   brand-black      #0A0A0A
 *   brand-gray       #6B6B6B
 *   brand-gray-light #F2F2F2
 *   brand-white      #FFFFFF
 *   brand-pink       #D4547A
 */

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-black": "#0A0A0A",
        "brand-gray": "#6B6B6B",
        "brand-gray-light": "#F2F2F2",
        "brand-white": "#FFFFFF",
        "brand-pink": "#D4547A",
      },
      fontFamily: {
        italiana: ["var(--italiana-font)", "serif"],
        manrope: ["var(--manrope-font)", "sans-serif"],
        spectral: ["var(--spectral-font)", "serif"],
      },
      borderRadius: {
        none: "0px",
      },
      maxWidth: {
        section: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;

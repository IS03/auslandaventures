import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1A3C8A",
          deep: "#0f2558",
        },
        sky: {
          DEFAULT: "#33A7D2",
          light: "#7ec8e8",
        },
        turquoise: "#2dd4bf",
        amber: {
          DEFAULT: "#F4B41A",
          warm: "#e8940f",
        },
        coral: "#E3342F",
        sand: "#f7f3eb",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 40px -12px rgba(26, 60, 138, 0.25)",
        glow: "0 0 60px -12px rgba(51, 167, 210, 0.45)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

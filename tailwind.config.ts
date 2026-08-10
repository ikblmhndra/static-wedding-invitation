import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Monochrome luxury palette
        champagne: "#f3f3f1",
        blush: "#e4e4e2",
        rose: "#2f2f2f",
        ivory: "#fafafa",

        truffle: "#111111",
        gold: "#3a3a3a",
        "gold-deep": "#1f1f1f",

        olive: "#666666",
        sand: "#e9e9e7",

        "mink-soft": "#888888",
        "truffle-soft": "#5f5f5f",

        script: "#333333",
      },

      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-body)"],
        accent: ["var(--font-accent)"],
      },

      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.10)",
        card: "0 12px 40px rgba(0, 0, 0, 0.08)",
      },

      backgroundImage: {
        "petal-glow":
          "radial-gradient(circle at top left, rgba(255, 255, 255, 0.9), transparent 42%), radial-gradient(circle at top right, rgba(225, 225, 225, 0.55), transparent 38%), linear-gradient(180deg, rgba(250, 250, 250, 1) 0%, rgba(238, 238, 238, 1) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
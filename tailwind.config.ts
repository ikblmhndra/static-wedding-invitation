import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        champagne: "#f6efe6",
        blush: "#f3d8dd",
        rose: "#d48c9a",
        ivory: "#fffaf5",
        truffle: "#4e403d",
        gold: "#b48a4f",
        olive: "#87806a"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-body)"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(103, 77, 66, 0.12)",
        card: "0 12px 40px rgba(119, 95, 81, 0.12)"
      },
      backgroundImage: {
        "petal-glow":
          "radial-gradient(circle at top left, rgba(244, 221, 225, 0.9), transparent 42%), radial-gradient(circle at top right, rgba(245, 236, 223, 0.95), transparent 38%), linear-gradient(180deg, rgba(255, 250, 245, 1) 0%, rgba(250, 244, 237, 1) 100%)"
      }
    }
  },
  plugins: []
};

export default config;

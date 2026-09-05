import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F7F4EE",
          50: "#FDFCFA",
          100: "#F7F4EE",
          200: "#EFEAE0",
        },
        ink: {
          DEFAULT: "#141212",
          900: "#0F0D0D",
          800: "#1A1717",
          700: "#2B2626",
        },
        plum: {
          DEFAULT: "#4A1030",
          50: "#F6ECF1",
          100: "#E4C2D2",
          400: "#7A2650",
          500: "#5C1B3C",
          600: "#4A1030",
          700: "#380A24",
          900: "#230515",
        },
        gold: {
          DEFAULT: "#C9A227",
          100: "#F3E7BE",
          300: "#DDBA5C",
          500: "#C9A227",
          700: "#96771A",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInSlow: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        fadeInSlow: "fadeInSlow 1.1s ease both",
      },
    },
  },
  plugins: [],
};

export default config;

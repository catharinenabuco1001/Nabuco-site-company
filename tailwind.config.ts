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
        // As cores marcadas com var(--c-...) têm o valor padrão em
        // src/app/globals.css (:root) e são trocadas pela classe .tema-claro.
        // Paleta PAC — trocar os valores aqui já atualiza o site inteiro,
        // sem tocar nos componentes. Os nomes ("cream", "ink"...) são só
        // identificadores herdados; o que importa é o papel de cada um:
        //   cream = fundo (verde escuro)      ink  = texto/painéis invertidos (off-white)
        //   plum  = destaque secundário (dourado envelhecido, para links e textos)
        //   gold  = destaque principal (dourado metálico vivo, botões/badges)
        cream: {
          DEFAULT: "rgb(var(--c-cream) / <alpha-value>)", // fundo principal do site (#0F2E22)
          50: "rgb(var(--c-cream-50) / <alpha-value>)", // superfícies elevadas (#173B2C)
          100: "rgb(var(--c-cream-100) / <alpha-value>)", // faixas alternadas (#112F23)
          200: "rgb(var(--c-cream-200) / <alpha-value>)", // #0A2117
          900: "#081910", // texto escuro sobre superfícies claras/douradas
        },
        ink: {
          DEFAULT: "rgb(var(--c-ink) / <alpha-value>)", // off-white (#F2F0EB) — texto principal
          900: "rgb(var(--c-ink) / <alpha-value>)",
          800: "rgb(var(--c-ink) / <alpha-value>)",
          700: "rgb(var(--c-ink) / <alpha-value>)",
        },
        plum: {
          DEFAULT: "#B8903E", // dourado envelhecido — destaque secundário (links, eyebrows)
          50: "#F7F0DE",
          100: "#EAD9AE",
          400: "#D9B66A",
          500: "rgb(var(--c-plum-500) / <alpha-value>)", // #C49A46
          600: "rgb(var(--c-plum-600) / <alpha-value>)", // #B8903E
          700: "rgb(var(--c-plum-700) / <alpha-value>)", // #8C6B2A
          900: "#5C4419",
        },
        gold: {
          DEFAULT: "#C9A24C", // dourado metálico — destaque principal (botões, badges)
          100: "#F3E9C9",
          300: "rgb(var(--c-gold-300) / <alpha-value>)", // #DEBD6E
          500: "#C9A24C",
          700: "#96751F",
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

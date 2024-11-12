import type { Config } from "tailwindcss";
import tailwind_animate_plugin from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: "var(--verde)",
        branco: "var(--branco)",
        preto: "var(--preto)",
      },

      screens: {
        container: { max: "1200px" },
        laptop: { max: "1050px" },
        mobile: { max: "950px" },
      },
    },
  },
  plugins: [tailwind_animate_plugin],
} satisfies Config;

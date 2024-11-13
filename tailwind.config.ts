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
      fontFamily: {
        osvaldo: "var(--font-osvaldo)",
      },
      colors: {
        verde: "var(--verde)",
        branco: "var(--branco)",
        preto: "var(--preto)",
        "verde-forte": "var(--verde-forte)",
      },
      screens: {
        container: {
          max: "1200px",
        },
        laptop: {
          max: "1050px",
        },
        mobile: {
          max: "950px",
        },
        mobile_g: {
          max: "600px",
        },
        mobile_m: {
          max: "450px",
        },
        mobile_s: {
          max: "380px",
        },
        mobile_sx: {
          max: "350px",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwind_animate_plugin],
} satisfies Config;

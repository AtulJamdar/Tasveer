import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: {
          100: "#FAF6F0", // Premium Warm Ivory
          200: "#F5EFE6",
          300: "#E6D5C3",
          400: "#D4AF37", // Classic Luxury Gold
          500: "#C5A880", // Muted Editorial Gold
          600: "#AA8E69",
          700: "#806646",
        },
        dark: {
          50: "#2A2A2A",
          100: "#1A1A1A",
          200: "#0D0D0D",
          300: "#050505",
        }
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "slow-pan": "slowPan 25s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slowPan: {
          "0%": { transform: "scale(1) translate(0px, 0px)" },
          "100%": { transform: "scale(1.1) translate(-10px, -5px)" },
        }
      }
    },
  },
  plugins: [],
};
export default config;

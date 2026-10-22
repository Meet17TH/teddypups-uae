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
        milk: "#fffdf8",
        cocoa: {
          DEFAULT: "#2a170e",
          soft: "#5a3a28",
        },
        toffee: {
          DEFAULT: "#c2622b",
          deep: "#a24a1a",
          ink: "#8e3f15",
        },
        honey: {
          DEFAULT: "#f2be6b",
          soft: "#fbe3b4",
        },
        sky: {
          DEFAULT: "#bfddf5",
          deep: "#2f6e9e",
        },
        blush: {
          DEFAULT: "#f9cdbf",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Fraunces", "Georgia", "serif"],
        sans: ["var(--font-figtree)", "Figtree", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        hand: ["var(--font-shantell)", "Shantell Sans", "cursive"],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};
export default config;

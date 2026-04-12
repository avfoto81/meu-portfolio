import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'apple': '2.5rem',
      },
      colors: {
        apple: {
          gray: "#86868b",
          bg: "#f5f5f7",
        }
      }
    },
  },
  plugins: [],
};
export default config;
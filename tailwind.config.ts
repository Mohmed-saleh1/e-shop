import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        abhaya: ['"Abhaya Libre"', 'sans-serif'],
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      bold: '500',
      extrabold: '800', 
      }
    },
  },
  plugins: [],
} satisfies Config;

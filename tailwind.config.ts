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
        lightGray: "#5E5E5E",
        darkGray: "#545454",
        milk: "#D9D9D9",
      },
      fontFamily: {
        abhaya: ["Abhaya Libre", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        header1: "url('/home/header-1.jpeg')",
        header2: "url('/home/header-2.jpeg')",
      },
      boxShadow: {
        imgShadow: "0px 4px 4px 0px #00000040",
      },
    },
  },
  plugins: [],
} satisfies Config;

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
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundColor: {
        carouselCard: "rgba(196, 196, 196, 0.22)",
        carouselLayer: "rgba(0, 0, 0, 0.59)",
      },
      backgroundImage: {
        header1: "url('/home/header-1.jpeg')",
        header2: "url('/home/header-2.jpeg')",
        footer: 'linear-gradient(180deg, rgba(196, 196, 196, 0.022) 0%, rgba(94, 94, 94, 0.22) 57.09%)',
      },
      boxShadow: {
        imgShadow: "0px 4px 4px 0px #00000040",
        carouselShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;

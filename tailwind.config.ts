import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: {
          primary: {
            500: "#8A42DB",
            400: "#9955E8",
          },
          secondary: "#7DFFAF",
          surface: {
            background: "#171023",
            primary: "#2C243B",
            secondary: "#413A4F",
            tertiary: "#4E4563",
            techs: "#9955E8",
            buttonDefault: "#8A42DB",
            buttonHover: "#9955E8",
          },
          text: {
            primary: "#F5F6F6",
            secondary: "#CDD0D4",
          },
          brand: {
            gradient: "linear-gradient(90deg, #9955E8 0%, #7BFFAF 100%)",
          },
        },
        light: {
          primary: {
            500: "#8A42DB",
            400: "#9955E8",
          },
          secondary: "#7DFFAF",
          surface: {
            background: "#F5F6F6",
            primary: "#FFFFFF",
            secondary: "#C9CFCF",
            tertiary: "#B3BCBC",
            techs: "#9955E8",
            buttonDefault: "#8A42DB",
            buttonHover: "#9955E8",
          },
          text: {
            primary: "#171023",
            secondary: "#413A4F",
          },
          brand: {
            gradient: "linear-gradient(90deg, #9955E8 0%, #7BFFAF 100%)",
          },
        },
      },
      fontFamily: {
        heebo: ["var(--font-heebo)"],
        kalam: ["var(--font-kalam)"],
      },
      boxShadow: {
        card: "0px 0px 48px 0px rgba(125, 255, 175, 0.24);",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;

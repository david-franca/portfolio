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
        light: {
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
        dark: {
          primary: {
            500: "#9F7CE3",
            400: "#B189F0",
          },
          secondary: "#05612b",
          surface: {
            background: "#F0F1F2",
            primary: "#FFFFFF",
            secondary: "#F5F6F7",
            tertiary: "#E0E2E7",
            techs: "#B189F0",
            buttonDefault: "#9F7CE3",
            buttonHover: "#B189F0",
          },
          text: {
            primary: "#333333",
            secondary: "#666666",
          },
          brand: {
            gradient: "linear-gradient(90deg, #B189F0 0%, #05612b 100%)",
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

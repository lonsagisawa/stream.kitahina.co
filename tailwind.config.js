/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter Variable", "LINE Seed JP", "sans-serif"],
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "var(--color-brand)",
          allstars: {
            DEFAULT: "#f34f6d",
            light: colors.rose["200"],
            dark: colors.rose["800"],
          },
          cinderellagirls: {
            DEFAULT: "#2681c8",
            light: colors.blue["200"],
            dark: colors.blue["800"],
          },
          millionlive: {
            DEFAULT: "#ffc30b",
            light: colors.yellow["200"],
            dark: colors.yellow["800"],
          },
          sidem: {
            DEFAULT: "#11be93",
            light: colors.emerald["200"],
            dark: colors.emerald["800"],
          },
          shinycolors: {
            DEFAULT: "#8dbbff",
            light: colors.sky["200"],
            dark: colors.sky["800"],
          },
        },
      },
    },
  },
  plugins: [],
};

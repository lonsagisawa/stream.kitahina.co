/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["InterVariable", "LINE Seed JP", "sans-serif"],
    },
    extend: {
      colors: {
        brand: {
          sidem: {
            DEFAULT: "#11be93",
            light: "#a7f3d0",
            dark: "#065f46",
          },
        },
      },
    },
  },
  plugins: [],
};

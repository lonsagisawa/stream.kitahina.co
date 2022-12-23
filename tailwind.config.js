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
    extend: {},
  },
  plugins: [],
};

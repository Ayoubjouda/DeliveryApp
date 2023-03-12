/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#00000",
        white: "#ffffff",
        orange: "#E29547",
        lightOrange: "#FFEEDD",
        lightGray: "#FAFAFA",
        subText: "#AAAAAA",
        promo: "#E24747",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        orange: "#FD683D",
        primary: "#1D272F",
        lightGray: "#FAFAFA",
        subText: "#AAAAAA",
        subTitle: "#A7A9B7",
        promo: "#E24747",
        dotBg: "#EBECF3",
        darkOrange: "#ca5331",
        darkWhite: "#e6e6e6",
        lightGray: "#F8F9Fb",
        bgFill: "#F2F4F9",
        blueText: "#191D31",
      },
    },
    fontFamily: {
      AvenirRoman: "Avenir-Roman",
      AvenirHeavy: "Avenir-Heavy",
      AvenirMedium: "Avenir-Medium",
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],

  theme: {

    extend: {
      colors: {
        "gray-dark-main": "#23242a",
        "gray-dark-second": "#28292d",
        "gray-light": "#d3dce6",
        "red-main": "#ff4b45",
      },
      fontFamily: {
        general : ["Special Elite"],
        second :["Syne Mono"],
        dot :["Doto"],
        less :["Chakra Petch"],
        hiye :["Sankofa Display"],
      },
    },
  },
};

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
first:"#35374B",
sec:"#344955",
three:"#50727B",
four:"#78A083",
five: "#9DB2BF",
tex :"#803D3B",
        primary : "#E8E0C8",
        secondary:"#B66D2F",
        primaryDark:"#D3A446",
        secondaryDark:"#297272",
        third:"#1a4146",
        forth: "#6D8B74",
        fifth:"#DAD3BE",
        sixth:"#254336"
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
  darkMode: 'selector',
};

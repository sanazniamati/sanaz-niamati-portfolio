/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        green: "#93E3AB",
        blue: "#4ea074",
        primary: "#B63E96", //240,86,199
        primaryDark: "#58E6D9", //80,230,217
      },
      minHeight: {
        "calc-22": "calc(100vh - 116px)",
        "calc-(100vh-(footer-header))": "calc(100vh -116px)",
      },
      backgroundImage: {
        circularLight:
          " repeating-radial-gradient(rgba(0,0,0,0.6) 2px, #ffffff 5px,#ffffff 100px);",
      },
    },
  },
  plugins: [],
};

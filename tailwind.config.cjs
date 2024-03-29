/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#03001C",
        secondary: "#aaa6c3",
        tertiary: "#5B8FB9",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    plugin(function ({ addUtilities, addComponents, e, config }) {
      const newUtilities = {
        ".horizontal-tb": {
          writingMode: "horizontal-tb",
        },
        ".vertical-rl": {
          writingMode: "vertical-rl",
        },
        ".vertical-lr": {
          writingMode: "vertical-lr",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};

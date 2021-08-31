const colors = require("tailwindcss/colors");

// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      supernova: {
        50: "#fffcf2",
        100: "#fffae6",
        200: "#fff2c0",
        300: "#ffea9b",
        400: "#ffdb4f",
        500: "#ffcb04",
        600: "#e6b704",
        700: "#bf9803",
        800: "#997a02",
        900: "#7d6302",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#005248",
          dark: "#005248",
          light: "#00B8A2",
          verylight: '#C2FFF8',
        },
        secondary: {
          DEFAULT: "#172136",
          dark: "172136",
          light: "#708AC2",
        },
        tertiary: {
          DEFAULT: "#43609D",
          dark: "172136",
          light: "172136",
        },
        bright: {
          DEFAULT: "#5995ED",
          dark: "172136",
          light: "172136",
        },
        light: {
          DEFAULT: "#F2F1F9",
          dark: "172136",
          light: "172136",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};

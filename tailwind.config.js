const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heading: ['Baloo 2'],
      },
      colors: {
        primary: {
          DEFAULT: "#209ECE",
          // dark: "#005248",
          // light: "#00B8A2",
          // verylight: '#C2FFF8',
        },
        secondary: {
          DEFAULT: "#457C6F",
          // dark: "172136",
          // light: "#708AC2",
        },
        tertiary: {
          DEFAULT: "#0F6484",
          light: "#CBF1FF",
        },
        // bright: {
        //   DEFAULT: "#5995ED",
        //   dark: "172136",
        //   light: "172136",
        // },
        // light: {
        //   DEFAULT: "#F2F1F9",
        //   dark: "172136",
        //   light: "172136",
        // },
        alert: {
          DEFAULT: "#DE1C22",
          light: '#F9D3D4'
        },
        grey: {
          DEFAULT: '#FAF8F9'
        },
        warning: {
          DEFAULT: '#E86825',
          light: '#FFE1BE',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};

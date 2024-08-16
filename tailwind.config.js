/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: "#d0e0e1",
          100: "#d0e0e1",
          200: "#d0e0e1",
          300: "#a8c4c8",
          400: "#a8c4c8",
          500: "#a8c4c8",
          600: "#a8c4c8",
          700: "#63989c",
          800: "#63989c",
          900: "#63989c",
        },
        sienna: {
          50: "#f3bea5",
          100: "#f3bea5",
          200: "#f3bea5",
          300: "#e15a1d",
          400: "#e15a1d",
          500: "#e15a1d",
          600: "#e15a1d",
          700: "#cb521a",
          800: "#cb521a",
          900: "#cb521a",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6765F0",
          light: "#8382EB",
          deep: "#334e7b4d",
        },
        secondary: {
          DEFAULT: "#264373",
        },
        dark: "#262524",
        gray: "rgba(38, 37, 36, 0.500)",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Grotesque: ["Darker Grotesque", "sans-serif"],
      },
    },
  },
  plugins: [],
};

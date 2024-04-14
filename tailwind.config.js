/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#1B3725",
        "secondary-dark": "#285236",
        "primary-light": "#B7D1B3",
        "secondary-light": "#DCE8D9",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
        LouisG: ["Louis",]
      },
    },
  },
  plugins: [],
});

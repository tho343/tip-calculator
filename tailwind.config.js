/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "very-dark-cyan": "hsl(183deg, 100%, 15%)",
      primary: "hsl(172, 67%, 45%)",
      "dark-grayish-cyan": "hsl(186, 14%, 43%)",
      "grayish-cyan": "hsl(184, 14%, 56%)",
      "light-grayish-cyan": "hsl(185, 41%, 84%)",
      "very-light-grayish-cyan": "hsl(189, 41%, 97%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  plugins: [],
};
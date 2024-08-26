/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(270deg, rgba(87, 0, 199, 0.4) 6.44%, rgba(86, 0, 196, 0.5) 46.74%, #410094 100%)',
      },
      colors:{
        'AIDEOTYPO':'rgba(110, 0, 250, 1)',
      }
    },
  },
  plugins: [],
}
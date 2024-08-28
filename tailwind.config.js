/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(270deg, rgba(87, 0, 199, 0.4) 6.44%, rgba(86, 0, 196, 0.5) 46.74%, #410094 100%)',
        'customgradient-background':'linear-gradient(270deg, rgba(87, 0, 199, 0.32) 6.44%, rgba(86, 0, 196, 0.4) 24.14%, rgba(65, 0, 148, 0.8) 100%)',
        'header-background-image':' linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),url(/public/Rectangle128.png)',
        'header-background-bluetheme':'url(/public/Rectangle\ 145.png)'
      },
      colors:{
        'AIDEOTYPO':'rgba(110, 0, 250, 1)',
        'darkpurple':'#5700C7',
        'midpurple':'#5600C4',
        'lightpurple':'#410094',
        
      },
      height:{
        'custom-height':'508px',
      }
      
      
    },
  },
  plugins: [],
}
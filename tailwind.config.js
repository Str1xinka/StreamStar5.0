/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {  
      ...colors,
      'streamstargray': '#212022'
      ,'streamstartext': ' #9A9797'
        ,'streamstarbuttonbackground': '#151315'
        ,'navbarblack': '#0E0E0E'
      
    },
    extend: {
        spacing: {
          '391': '391px',
          '1093': '1093px',
          '892': '892px',
          '501': '501px'
        }
    }
    
  },
  plugins: [],
}
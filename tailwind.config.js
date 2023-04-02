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
          '892': '886px',
          '840': '840px',
          '605': '605px',
          '990': '1004px',
          '50': '200px',
          '540': '540px',
          '690': '800px',
          '47': '190px',
          '1': '1px',
          '173': '173px',
          '250': '250px',
          '256': '244px',
          '246': '243px',
          '230': '242px',
          '88': '86px',
      
         
        },
        borderWidth: {
          DEFAULT: '1px',
          '0': '0',
          '2': '2px',
          '3': '3px',
          '4': '4px',
          '6': '6px',
          '8': '8px',
        }
    },
  },  
  
    
  
  plugins: [],
}
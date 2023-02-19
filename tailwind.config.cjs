/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'nunito':'Nunito Sans'
      }
    },
    colors:{
      white:{
        50:'hsl(0, 0%, 100%)'
      },
      bege:{
        100:'hsl(0, 0%, 98%)'
      },
      'text-black':{
        100:'hsl(200, 15%, 8%)'
      },'text-input':{
        100:'hsl(0, 0%, 52%)'
      },
      'dark-mode-bg':{
        100:'hsl(207, 26%, 17%)'
      },
      'dark-mode-element':{
        100:'hsl(209, 23%, 22%)'
      }
    },boxShadow:{
      box:'0.5px 0.5px 8px #a3a3a3',
      'box-dark':'0.5px 0.5px 8px #0a0a0a',
      none:'0px 0px 0px transparent',
    }
  },
  
  plugins: [],
}
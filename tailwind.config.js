/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'darkblue': '#000B10',
      'mediumblue': '#001722',
      'offwhite': '#EFEFEF',
      'blacktransparent': 'rgba(0,0,0,0.9)'
    },
    extend: {
      backgroundImage: {
        'CTBG': "./src/images/work/CT.png"
      }
    },
  plugins: [],
}
}

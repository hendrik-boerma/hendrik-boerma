/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'futura': ['Futura', 'Arial', 'Helvetica', 'sans-serif'],
    },
    colors: {
      'darkblue': '#000B10',
      'mediumblue': '#001722',
      'offwhite': '#EFEFEF',
      'blacktransparent': 'rgba(0,0,0,0.9)'
    },
    extend: {}
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'darkblue': '#1F1F1F',
      'mediumblue': '#0D0D0D',
      'offwhite': '#EFEFEF',
      'neoblue': '#0DDBFF',
      'lightgrey': '#F2F2F2',
      'blacktransparent': 'rgba(0,0,0,0.9)'
    },
    extend: {
      backgroundImage: {
        'portret': "url('../src/Images/portret.png')"
      },
      spacing: {
        '128': '32rem',
      }
    },
  plugins: [],
}
}

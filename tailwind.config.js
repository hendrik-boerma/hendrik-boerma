/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'backgroundcolor': '#161616',
      'backgroundcolor2': 'rgba(255, 255, 255, 0.05)',
      'textcolor': '#EFEFEF',
      'primary': 'rgba(255, 255, 255, 0.05)',
      'secondary': '#00E3CC',
      'footer': '',
      'footertext': ''
    },
    extend: {
      backgroundImage: {
        'portret': "url('../src/Images/portret.png')"
      }
    },
  plugins: [],
}
}

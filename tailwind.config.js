/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'backgroundcolor': '#161616',
      'backgroundcolor2': '#262626 ',
      'backgroundmodal' : 'rgba(0, 0, 0, 0.5)',
      'textcolor': '#EFEFEF',
      'primary': '#595959',
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

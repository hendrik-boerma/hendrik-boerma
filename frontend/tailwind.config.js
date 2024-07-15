/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'backgroundcolor': '#161616',
      'backgroundcolor2': '#262626',
      'backgroundmodal' : 'rgba(0, 0, 0, 0.5)',
      'textcolor': '#EFEFEF',
      'textcolor2': '#F2F2F2',
      'primary': '#595959',
      'secondary': '#00E3CC',
      'footer': '',
      'footertext': ''
    },
    extend: {
      backgroundImage: {
        'portret': "url('../src/Images/portret.png')",
        'portretmono' :"url('../src/Images/Profile.JPG')"
      },
      height: {
        '713px': '713px',
      },
      width: {
        '713px': '713px',
      }
    },
  plugins: [],
}
}

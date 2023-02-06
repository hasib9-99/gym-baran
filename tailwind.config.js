/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '910': '#264373',
        '920': '#8382EB',
        '930': '#262524',
        '940': '#D388FF',
        'gradient1': '#6462F0',
        'gradient2': '#9190E9',
        'inner2': '#F3B411',
      },
      size:{
        'btn-px': '13px',
        'btn-py': '33px',
        'head': '56px'
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif', ],
        'Grotesque': ['Darker Grotesque', 'sans-serif', ],
      },
      width: {
        '97': '492px',
        '98': '584px',
        '99': '884px',
        
      },
      height: {
        '99': '884px',
      },
      spacing: {
        '484px': '-484px',
        '130px': '130px',
        '81px': '81px',
        '40%': '-40%',
      },
      
      boxShadow: {
        '3xl': '0px 20px 80px rgba(51, 78, 123, 0.3)',
      },
      blur: {
        'xs': '282px'
      },
      blur: {
        'xs': '282px'
      },
      lineHeight: {
        'extra-loose': '73px',
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
}

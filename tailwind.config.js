/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          "DEFAULT": '#6765F0',
          "light": "#8382EB"
        },
        'secondary': {
          "DEFAULT": '#6765F0',
        },
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
    },
  },
  plugins: [],
}

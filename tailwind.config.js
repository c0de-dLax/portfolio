/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': {'max': '600px'},
      'sm': {'max': '640px'},
      'mobile': {'max': '480px'},
      'notOnMobile': {'min': '481px'},
    },
    extend: {
    },
  },
  plugins: [],
}
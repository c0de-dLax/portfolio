/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '640px'},
      'mobile': {'max': '480px'},
      'notOnMobile': {'min': '481px'},
    },
    extend: {
    },
  },
  plugins: [],
}
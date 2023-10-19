/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '475px',
      ...defaultTheme.screens
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


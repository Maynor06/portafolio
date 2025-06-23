/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      screens:{
        'phone': {'max': "450px"}
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
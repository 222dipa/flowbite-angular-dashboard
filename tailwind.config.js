/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '@apply bg-blue-600',
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

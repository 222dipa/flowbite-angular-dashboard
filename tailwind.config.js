/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      'body': [
        'Raleway',
        'ui-sans-serif',
        'system-ui',
      ],
      'sans': [
        'Raleway',
        'ui-sans-serif',
        'system-ui',
      ]
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

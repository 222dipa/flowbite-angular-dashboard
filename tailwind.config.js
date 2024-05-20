/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // primary: {
        //   '50': '#eff4ff',
        //   '100': '#dbe6fe',
        //   '200': '#bfd3fe',
        //   '300': '#93b4fd',
        //   '400': '#6090fa',
        //   '500': '#3b76f6',
        //   '600': '#2563eb',
        //   '700': '#1d58d8',
        //   '800': '#1e4baf',
        //   '900': '#1e408a',
        //   '950': '#172a54',
        // },
        primary: {"50":"#fffbeb","100":"#fef3c7","200":"#fde68a","300":"#fcd34d","400":"#fbbf24","500":"#f59e0b","600":"#d97706","700":"#b45309","800":"#92400e","900":"#78350f","950":"#451a03"}
      }
    },
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

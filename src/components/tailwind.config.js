/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        'primary': '#3498db',
        'secondary': '#f1c40f',
        'dark': '#2c3e50',
        'light': '#ecf0f1',
        },
        fontFamily: {
          'body': ['Lato', 'sans-serif'],
          'heading': ['Playfair Display', 'serif'],
          'lobster':['Lobster','cursive'],
          'roboto':['Roboto','sans-serif']

        }
    },
  },
  plugins: [],
}


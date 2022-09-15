/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html", "main.js"],
  theme: {
    extend: {
      backgroundImage: {
        'fundo': "url('/img/background_Mesa de trabajo 1 copia 3.png')"
      },
      colors: {
        'rosa': '#C67DA4'
      }
    },
  },
  plugins: [],
}

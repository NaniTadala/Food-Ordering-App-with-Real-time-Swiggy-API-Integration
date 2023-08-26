/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.js",],
  theme: {
    extend: {
      gap: {
        '10': '3.3rem',
      }
    },
  },
  plugins: [],
}


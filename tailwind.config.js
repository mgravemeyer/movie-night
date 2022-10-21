/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/*.{html,ts,tsx}',
    './components/*.{ts,tsx}',
    './components/atoms/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksandLight: ["QuicksandLight", "sans-serif"],
        quicksandBook: ["QuicksandBook", "sans-serif"],
        quicksandBold: ["QuicksandBold", "sans-serif"],
      }
    },
  },
  plugins: [],
}

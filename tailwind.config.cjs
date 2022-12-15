/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        200: '78rem'
      },
      width: {
        20: '6rem'
      }
    },
  },
  plugins: [],
};

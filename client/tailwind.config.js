/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Dancing Script', 'cursive'],
        brand: ['Bungee Outline', 'cursive'],
      },
    },
  },
  plugins: [],
};

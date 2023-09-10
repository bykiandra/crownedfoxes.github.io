/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#0B1957',
      'pink': '#FA9EBC',
      'pink-light': '#FFDBD1',
      'off-white': '#F8F3EA',
    },
    extend: {
      screens: {
        '2xs': '400px', // Primarily for setting text on smaller screens
        'xs': '550px', // Primarily for setting the background image size
      },
      fontFamily: {
        'display': ['Kangmas', 'Inter', 'serif'],
      },
    },
  },
  plugins: [],
}


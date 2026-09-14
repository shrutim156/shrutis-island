/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FAF6EE',
          100: '#F5EFEB',
          200: '#EBDCB9',
          300: '#DEC493',
          400: '#CEAA6C',
          500: '#B88D4B',
          800: '#4A351C',
          900: '#2C1D0E'
        },
        ink: {
          light: '#5C4329',
          DEFAULT: '#36220F',
          dark: '#1C1005'
        },
        ocean: {
          100: '#E2F1F8',
          200: '#B8DCED',
          500: '#4A8BB2',
          800: '#1B4158'
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
        handwritten: ['Caveat', 'Georgia', 'cursive']
      }
    },
  },
  plugins: [],
}
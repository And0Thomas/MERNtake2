/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        coffee: {
          500: '#795548', // Adjust the color code as needed
          700: '#5D4037',
        }
      },
      fontFamily: {
        tanker: ['Tanker', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

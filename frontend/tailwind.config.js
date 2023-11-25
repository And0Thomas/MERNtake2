/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'brown-600': '#795548',
        'cream': '#f0e4d7',
        'neumorphic-background': '#f0e4d7', // Cream background
        'neumorphic-text': '#5d4037', // Dark brown text
        'mocha': '#6b4f4b',
        'latte-light': '#9c7c78',
        'espresso-dark': '#3e2c29',
        'cappuccino-cream': '#f5f5f5',
        coffee: {
          500: '#795548', // Adjust the color code as needed
          700: '#5D4037',
        }
      },
      boxShadow: {
        'neumorphic': '8px 8px 15px #c8b2a7, -8px -8px 15px #ffffff',
      },
      fontFamily: {
        tanker: ['Tanker', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

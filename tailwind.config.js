/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sawer': ['Sawer', 'system-ui', 'sans-serif'],
        'garet': ['Garet', 'system-ui', 'sans-serif'],
        'christmas': ['PWHappyChristmas', 'cursive'],
        'poppins': ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'snow-1': 'snow-1 15s linear infinite',
        'snow-2': 'snow-2 20s linear infinite',
        'snow-3': 'snow-3 25s linear infinite',
      },
      keyframes: {
        'snow-1': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'snow-2': {
          '0%': { transform: 'translateY(-100%) translateX(-10px)' },
          '100%': { transform: 'translateY(100%) translateX(10px)' },
        },
        'snow-3': {
          '0%': { transform: 'translateY(-100%) translateX(10px)' },
          '100%': { transform: 'translateY(100%) translateX(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {

      keyframes: {
        blinkColors: {
          '0%': { backgroundColor: '#1A73E8' },
          '20%': { backgroundColor: '#ff0000' },
          '40%': { backgroundColor: '#00ff00' },
          '60%': { backgroundColor: '#0000ff' },
          '80%': { backgroundColor: '#ff00ff' },
          '100%': { backgroundColor: '#1A73E8' },
        },
      },
      animation: {
        blinkColors: 'blinkColors 10s infinite',
      },

    },
  },
  variants: {},
  plugins: [],
}


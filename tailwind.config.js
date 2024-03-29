/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./src/Assets/bg-image.jpg')"
      },
      letterSpacing: {
        veryWide: '0.2em'
      }
    },
  },
  plugins: [],
}
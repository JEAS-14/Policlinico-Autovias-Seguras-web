/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./main.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0284c7', // Azul Médico
        'secondary': '#0f172a', // Azul Oscuro
      }
    },
  },
  plugins: [],
}
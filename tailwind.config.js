/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // <-- AÑADE ESTA LÍNEA
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
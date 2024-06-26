/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transform: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      transition: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    },
  },
  plugins: [],
}
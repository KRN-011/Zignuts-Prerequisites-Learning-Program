/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': '1536px',
      'xl': '1280px',
      'lg': '1024px',
      'md': '768px',
      'sm': '640px',
      'lm': '425px',
      'mm': '375px',
      'ms': '320px'
    },
  },
  plugins: [],
}
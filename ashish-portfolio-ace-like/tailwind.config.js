/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif','system-ui','Inter','Arial','sans-serif'],
        body: ['ui-sans-serif','system-ui','Inter','Arial','sans-serif'],
      },
      colors: {
        brand: {
          50: '#eefaff',
          100: '#d6f0ff',
          200: '#aee1ff',
          300: '#7ccfff',
          400: '#47b7ff',
          500: '#1e9fff',
          600: '#0f7fe5',
          700: '#0b64b8',
          800: '#0c568f',
          900: '#0e486f',
        }
      }
    },
  },
  plugins: [],
}

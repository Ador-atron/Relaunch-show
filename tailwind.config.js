/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          500: '#0A84FF',
          600: '#0066CC',
          50: '#E8F4FD',
          100: '#F0F8FF',
        },
        midnight: '#1A1A2E',
        steel: '#4A5568',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

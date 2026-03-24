/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0F1A',
        primary: '#00C896',
        card: '#1E2A3A',
        textLight: '#FFFFFF',
        textMuted: '#9CA3AF',
      },
    },
  },
  plugins: [],
}

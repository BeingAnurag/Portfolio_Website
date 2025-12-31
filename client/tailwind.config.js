/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cinema-black': '#050505',
        'cinema-gray': '#1a1a1a',
        'cinema-accent': '#2dd4bf', // Teal/Cyan seen in headers
        'cinema-red': '#ef4444',    // REC dot
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grain': "url('https://upload.wikimedia.org/wikipedia/commons/7/76/Noise.png')", // Simple noise texture
      }
    },
  },
  plugins: [],
}
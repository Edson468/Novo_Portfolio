/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Você pode definir cores personalizadas aqui
        primary: "#3b82f6",
        dark: "#0f172a",
      },
      keyframes: {
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        'gradient-bg': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      animation: {
        'slow-zoom': 'slow-zoom 15s ease-in-out infinite',
        'gradient-bg': 'gradient-bg 8s ease infinite',
      }
    },
  },
  plugins: [],
}

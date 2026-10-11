/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        dark: {
          base: '#0b0f19',
          surface: '#111827',
          card: '#151d2f',
          hover: '#1c263c',
          border: '#1e293b',
        },
      },
      boxShadow: {
        'glow-blue': '0 0 35px -5px rgba(59, 130, 246, 0.35)',
        'glow-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.35)',
        'glow-card': '0 10px 40px -10px rgba(0, 0, 0, 0.5), 0 0 20px -5px rgba(59, 130, 246, 0.1)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#fbf8f5',
          100: '#f5f1eb',
          200: '#ebe3da',
          300: '#dccfc2',
          400: '#c6b6a7',
          500: '#ab9788',
          600: '#8f7a6d',
          700: '#6f5f55',
          800: '#4f453f',
          900: '#342e2b',
        },
        blush: '#d9b6b0',
        mist: '#aeb3ac',
        sand: '#c9bca8',
      },
      boxShadow: {
        soft: '0 24px 60px rgba(75, 63, 56, 0.08)',
        glow: '0 18px 40px rgba(217, 182, 176, 0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'system-ui', 'sans-serif'],
        serif: ['Noto Serif SC', 'Songti SC', 'serif'],
      },
      letterSpacing: {
        widest: '0.28em',
      },
    },
  },
  plugins: [],
};
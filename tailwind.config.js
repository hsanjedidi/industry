/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        accent: {
          50: '#fff8eb',
          100: '#ffefc6',
          200: '#ffdd88',
          300: '#ffc44a',
          400: '#ffab20',
          500: '#f9880f',
          600: '#dc6807',
          700: '#b74c08',
          800: '#94390d',
          900: '#7a2f0d',
          950: '#451706',
        },
        steel: {
          50: '#f6f8fa',
          100: '#eceef2',
          200: '#d5d9e0',
          300: '#b0b7c4',
          400: '#848fa3',
          500: '#65708a',
          600: '#505a72',
          700: '#42495d',
          800: '#393f4f',
          900: '#1f2330',
          950: '#12151e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        arabic: ['"Noto Kufi Arabic"', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#08080B',
          surface: '#0F0F14',
          elevated: '#16161D',
        },
        accent: {
          primary: '#7C5CFF',
          secondary: '#4C8CFF',
          glow: '#B892FF',
          cyan: '#00F0FF',
        },
        border: {
          subtle: 'rgba(255,255,255,0.08)',
          hover: 'rgba(255,255,255,0.16)',
        },
        text: {
          primary: '#F5F5F7',
          secondary: '#9A9AA5',
          muted: '#6B6B75',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'gradient-text': 'gradient-text 6s ease infinite',
        'spotlight': 'spotlight 3s ease-in-out infinite alternate',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(1deg)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'gradient-text': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        spotlight: {
          '0%': { opacity: '0.4', transform: 'scale(0.95)' },
          '100%': { opacity: '0.8', transform: 'scale(1.05)' },
        }
      },
      boxShadow: {
        'glass-glow': '0 0 50px -5px rgba(124, 92, 255, 0.35)',
        'card-glow': '0 12px 40px 0 rgba(0, 0, 0, 0.5), 0 0 25px 0 rgba(124, 92, 255, 0.25)',
        'neon-purple': '0 0 20px rgba(124, 92, 255, 0.6), inset 0 0 15px rgba(124, 92, 255, 0.2)',
        'neon-blue': '0 0 20px rgba(76, 140, 255, 0.6), inset 0 0 15px rgba(76, 140, 255, 0.2)',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: '#0B0F2F',
        'shiva-blue': '#1E3A8A',
        violet: '#4C1D95',
        gold: '#FFD700',
        'ash-gray': '#94A3B8',
        'fire-orange': '#F97316',
        cyan: '#22D3EE',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(180deg, #0B0F2F 0%, #1E3A8A 50%, #4C1D95 100%)',
        'gold-gradient': 'linear-gradient(135deg, #FFD700 0%, #F59E0B 100%)',
        'glow-gradient': 'radial-gradient(ellipse at center, rgba(34, 211, 238, 0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(255, 215, 0, 0.3)',
        'glow-cyan': '0 0 30px rgba(34, 211, 238, 0.4)',
        'glow-violet': '0 0 40px rgba(76, 29, 149, 0.5)',
        'inner-glow': 'inset 0 0 60px rgba(255, 215, 0, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 40px rgba(255, 215, 0, 0.3)' },
          '50%': { opacity: '0.9', boxShadow: '0 0 60px rgba(255, 215, 0, 0.5)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

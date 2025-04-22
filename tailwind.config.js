/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      perspective: {
        '10': '10px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      translate: {
        'z-neg-5': 'translateZ(-5px)',
        'z-neg-10': 'translateZ(-10px)',
      },
      scale: {
        '150': '1.5',
        '200': '2',
      },
      textShadow: {
        'default': '0 0 5px #000',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.perspective-10': {
          perspective: '10px',
        },
        '.preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.translate-z-neg-5': {
          transform: 'translateZ(-5px) scale(1.5)',
        },
        '.translate-z-neg-10': {
          transform: 'translateZ(-10px) scale(2)',
        },
        '.shadow-text': {
          textShadow: '0 0 5px #000',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 
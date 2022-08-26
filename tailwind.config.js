/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azul: {
          100: '#21d4fd',
          200: '#2152ff',
          300: '#344767',
          400: '#37517e',
        },
        cinza: {
          50: '#f8f9fa',
          100: '#eff0f5',
          200: '#67748e',
          300: '#5e5e5e',
        },
      },
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
      keyframes: {
        balanco_kf: {
          '0%': {
            transform: 'rotate(-20deg)'
          },

          '30%': {
            transform: 'rotate(20deg)'
          },

          '60%': {
            transform: 'rotate(-20deg)'
          },

          '90%': {
            transform: 'rotate(0deg)'
          }, 
        },
      },
      animation: {
        balanco: 'balanco_kf 1s linear'
      },
      scale: {
        '101': '1.009',
      },
    },
    screens: {
      'sm': '600px',
      // => @media (min-width: 640px) { ... }

      'md': '900px',
      // => @media (min-width: 768px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1536px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1836px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
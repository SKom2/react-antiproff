/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: '#808185',
        lightGray: '#F8F8F8',
        error: '#FF6161',
        violet: '#512689',
        black: '#151317',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        custom: '0 4px 20px 0 rgba(0, 0, 0, 0.08)',
      },
      fontSize: {
        h1: [
          '64px',
          {
            lineHeight: '75px',
          },
        ],
        t: [
          '20px',
          {
            lineHeight: '23.44px',
          },
        ],
        ts: [
          '16px',
          {
            lineHeight: '21.79px',
          },
        ],
        input: [
          '14px',
          {
            lineHeight: '16.41px',
          },
        ],
        error: [
          '10px',
          {
            lineHeight: '11.72px',
          },
        ],
      },
    },
  },
  plugins: [],
};
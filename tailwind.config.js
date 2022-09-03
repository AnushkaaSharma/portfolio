/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"], 
  theme: {
    extend: {
      colors: {
        neutral: {
          '100': '#FAFAFA',
          '200': '#F7F7F7',
          '300': '#F2F2F2',
          '400': '#D8D8D8',
          '500': '#C2C2C2',
          '600': '#A1A1A1',
          '700': '#7B7B7B',
          '800': '#484848',
          '900': '#2C2C2C',
        }
      },
      fontSize: {
        'sm': ['14px', '20px'],
        'p': ['16px', '24px'],
        'h6': ['20px', '32px'],
        'h4': ['32px', '44px'],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        semibold: 600,
        bold: 700,
      },
      fontFamily: {
        body: ['Mulish']
      }
    },
  },
  plugins: [],
}

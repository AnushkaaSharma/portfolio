/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"], 
  theme: {
    extend: {
      screens: {
        'sm': '300px',
        'md': '1024px',
        'lg': '1280px',
      },
      container: {
        'sm': '980px',
      },
      colors: {
        neutral: {
          '100': '#FAFAFA',
          '200': '#F7F7F7',
          '300': '#ECECEC',
          '400': '#D8D8D8',
          '500': '#C2C2C2',
          '600': '#A1A1A1',
          '700': '#7B7B7B',
          '800': '#484848',
          '900': '#333333',
        },
        red: {
          '400': '#FB766A',
        }
      },
      fontSize: {
        'sm': ['14px', '20px'],
        'p': ['16px', '24px'],
        'h6': ['20px', '32px'],
        'h4': ['32px', '44px'],
        'h2': ['48px', '52px'],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        semibold: 600,
        bold: 700,
      },
      fontFamily: {
        body: ['Mulish'],
        logo: ['Playfair Display'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./dist/**/*.html", "./src/**/*.css"],
  theme: {
    extend: {
      colors: {
        neutral: {
          '100': '#FAFAFA',
          '200': '#F4F4F4',
          '300': '#ECECEC',
          '400': '#D8D8D8',
          '500': '#C2C2C2',
          '600': '#A1A1A1',
          '700': '#7B7B7B',
          '800': '#484848',
          '900': '#2C2C2C',
        },
        belly: {
          '100': '#FBF1E7',
          '400': '#ED644A',
          'black':'#333333',
          'secondary': '#FCB316',
        },
        payper: {
          '100':'#FBF4E1',
          '900':'#94C4A9',
          '500':'#FFD760',
          'secondary':'#1A1A21',
        },
        chatter: {
          '100':'#ECF4FD',
          '500': '#2F80ED',
        }
      },
      fontSize: {
        'sm': ['14px', '20px'],
        'p': ['16px', '28px'],
        'h6': ['20px', '32px'],
        'h4': ['32px', '44px'],
        'h5': ['24px', '32px'],
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

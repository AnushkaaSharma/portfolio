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
          '900': '#333333',
          'background':'#1d2067',
          'secondary': '#ef9e91',
        },
        belly: {
          '100': '#FBF1E7',
          '400': '#ED644A',
          'bg': '#faedcd',
        },
        chatter: {
          '100':'#ECF4FD',
          '500': '#2F80ED',
          'bg':'#bae0b9',
        },
        banh: {
          'bg': '#E3E4F2',
        },
        wildfire: {
          '100': '#EFF3FA',
          '500': '#234075',
          '600': '#1B3159',
          'bg':  '#DDE6F4',
        },
        lalitpur: {
          '100': '#EFF6FF',
          '500': '#2563EB',
          '600': '#1D4ED8',
          'bg':  '#DBEAFE',
        },
        primary: {
          '400': '#F47A62',
          '500': '#ED644A',
          '600': '#D9492E',
        },
        accent: {
          'cream': '#FAF5EE',
          'paper': '#FBF7F0',
          'ink':   '#1A1A1A',
        },
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollDot: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%':      { transform: 'translateY(6px)', opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.2,0.7,0.2,1) both',
        'scroll-dot': 'scrollDot 1.8s ease-in-out infinite',
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
        headings: ['Oswald'],
      },
    },
  },
  plugins: [],
}

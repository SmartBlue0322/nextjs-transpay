module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'purple': {
        600: '#CE00FF',
        900: '#782DC2',
      },
      'seagreen': {
        900: '#93E9BE',
      },
      'pink': {
        600: '#E450BA',
        900: '#F833C0',
      },
      'white': {
        900: '#FFFFFF',
      },
      'dark': {
        900: '#000000',
      },
      'gray': {
        300: '#A4A4A4',
        500: '#BBBBBB',
        600: '#727272',
        700: '#4C4D4D'
      },
      'yellow': {
        300: '#FFC728'
      }
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        '4xl': '0 4px 9px 0px rgba(0, 0, 0, 0.05)',
        '5xl': '0 4px 22px 0px rgba(0, 0, 0, 0.15)',
        '6xl': '-30px 30px 0px 0px #93E9BE'
      }
    },
  },
  plugins: [],
};

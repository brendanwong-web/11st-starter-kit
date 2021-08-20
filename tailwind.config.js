const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.md'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.skyblue,
      purple: colors.violet,
      green: colors.teal,
      lhtblue: {
        light: '#7FB6CB',
        DEFAULT: '#84CEEB',
        dark: '#316B82',
        darker: '#385B61'
      }
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'md': '1rem',
      'md2': '1.125rem',
      'base': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};

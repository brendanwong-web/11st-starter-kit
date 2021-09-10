const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.md'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        'oppins': ['Poppins', 'sans-serif'],
        'ropa': ['Ropa Sans', 'sans-serif'],
        'header': ['Playfair Display', 'serif'],
      },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: colors.sky, 
      purple: colors.violet,
      red: colors.rose,
      green: colors.teal,
      lhtblue: {
        light: '#7FB6CB',
        DEFAULT: '#84CEEB',
        dark: '#316B82',
        darker: '#385B61',
        footer: '#6CB0E7',
        footerText: '#1E3E59'
      },
      lhtpurple: {
        DEFAULT: '#832CF1'
      },
      lhtgreen: {
        DEFAULT: '#AFE9DF',
        border: '#2A7064',
        fill: '#BFF6ED'
      }
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'md': '1rem',
      'md2': '1.125rem',
      'base': ['1.25rem', '2.25rem'],
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
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio'),],
};

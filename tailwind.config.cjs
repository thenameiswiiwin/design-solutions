const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      indigo: 'hsl(var(--color-indigo) / <alpha-value>)',
      orange: 'hsl(var(--color-orange) / <alpha-value>)',
      pink: 'hsl(var(--color-pink) / <alpha-value>)',
      red: 'hsl(var(--color-red) / <alpha-value>)',
      teal: 'hsl(var(--color-teal) / <alpha-value>)',
      violet: 'hsl(var(--color-violet) / <alpha-value>)',
      black: 'hsl(var(--color-black) / <alpha-value>)',
      gray: 'hsl(var(--color-gray) / <alpha-value>)',
      white: 'hsl(var(--color-white) / <alpha-value>)',
    },
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        large: '3.5rem',
        medium: '2.5rem',
        small: '2rem',
        base: '1.125rem',
      },
      lineHeight: {
        large: '4.375rem',
        medium: '3.1875rem',
        small: '2.5rem',
        base: '1.75rem',
      },
      padding: {
        x: '2.8125rem',
        y: '0.875rem',
      },
    },
  },
  plugins: [],
};

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2.4375rem',
        xl: '10.3125rem',
      },
    },
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
        btn: ['0.875rem', '1.75rem'],
        'btn-lg': ['1rem', '1.75rem'],
        h1: ['2.25rem', '2.835rem'],
        'h1-tablet': ['2.75rem', '3.465rem'],
        'h1-desktop': ['3.5rem', '4.375rem'],
        h2: ['1.625rem', '2.0475rem'],
        'h2-tablet': ['2rem', '2.52rem'],
        'h2-desktop': ['2.5rem', '3.1875rem'],
        h3: ['1.5rem', '1.89rem'],
        'h3-tablet': ['2rem', '2.5rem'],
        base: ['1.03rem', '1.625rem'],
        'base-tablet': ['1.125rem', '1.75rem'],
      },
      height: {
        180: '11.25rem',
        360: '22.5rem',
        410: '25.625rem',
      },
      width: {
        270: '16.875rem',
        364: '22.75rem',
        410: '25.625rem',
        540: '33.75rem',
        700: '43.75rem',
      },
      padding: {
        x: '1.6875rem',
        'x-md': '2.8125rem',
        y: '0.5rem',
        'y-md': '0.875rem',
        29: '1.8125rem',
        34: '2.125rem',
        49: '3.0625rem',
        75: '4.6875rem',
      },
      spacing: {
        23: '5.875rem',
        25: '6.25rem',
        66: '4.125rem',
        120: '7.5rem',
        136: '8.5rem',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/elements/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '346px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        Inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        'primary': '#00439D',
        'light-blue': '#C9DDE6',
        'app-red': '#ED2F05',
        'app-green': '#26A649',
        'black': '#202020',
        'black-50': '#20202080',
      },
    }
  },
  plugins: [],
}

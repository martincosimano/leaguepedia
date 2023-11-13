/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gold-100': '#f08c00',
        'teal-100': '#008080',
        'dark-100': '#373737',
        'dark-150': '#292929',
        'dark-200': '#1e1e1e',
      },
      spacing: {
        '100': '28rem'
      },
      minHeight: {
        '8': '8rem',
      }
    }
  },
  plugins: [],
}
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
        'opaque-100': '#1e1e1e',
        'opaque-200': '#373737',
      },
      spacing: {
        '100': '40rem', 
      }
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './ui/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        normal: ['var(--font-work-sans)'],
        heading: ['var(--font-playfair-display)']
      }
    }
  },
  plugins: []
};

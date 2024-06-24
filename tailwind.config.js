/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        footer: '#F3F3FD',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/hero-pattern.svg')",
        'calendar-page': "url('/public/svg/mother-cute-baby-indoor-home 1.svg')",
        'comunity-page': "url('/public/svg/com.svg')",
        'landing-page': "url('/public/svg/landing.svg')",
      }
    },
  },
  plugins: [],
};

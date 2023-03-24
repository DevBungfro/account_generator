/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      width: {
        'btn': '10.625rem',
      },
      colors: {
        purp: '#5c53f3',
      }
    }

   
  }
}

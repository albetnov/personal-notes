/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sofia: 'Sofia',
        nunitosans: 'Nunito Sans'
      }
    }
  },
  plugins: []
}

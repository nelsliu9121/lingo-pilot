/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('tailwindcss/defaultConfig'), require('xtendui/tailwind.preset'),
  ],
  content: [
    './node_modules/xtendui/src/*.mjs',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFEEEF',
          100: '#E0DEE0',
          200: '#C1BFC2',
          300: '#A39FA4',
          400: '#858087',
          500: '#666267',
          600: '#474448',
          700: '#3F3D40',
          800: '#373538',
          900: '#302E30',
          950: '#2C2A2C'
        },
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        DarkViolet: 'hsl(256, 26%, 20%)',
        GrayishBlue: 'hsl(216, 30%, 68%)',
        VeryDarkViolet: 'hsl(270, 9 %, 17 %)',
        DarkGrayishViolet: 'hsl(273, 4 %, 51 %)',
        VeryLightGray: 'hsl(0, 0 %, 98 %)',
      },
  
    },
  },
  plugins: [],
};

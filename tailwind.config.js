/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        veryDarkGray: "hsl(0, 0%, 17%)",
        darkGray: "hsl(0, 0%, 59%)",
      },
      backgroundImage: {
        bgPattern: "url('/src/assets/images/pattern-bg.png')",
      },
    },
    fontFamily: {
      sans:['Rubik']
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};

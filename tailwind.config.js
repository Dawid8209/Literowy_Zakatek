/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        kremowy: "#F9F5EC",
        bez: "#EADBC8",
        jasnyBraz: "#C7A17A",
        czekoladowy: "#6B4F3B",
        ciemnyBraz: "#3E2C23",
      },
    },
  },
  plugins: [],
};
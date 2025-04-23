/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#442D95",
        dividerColor: "#D9D9D9",
      },
      fontFamily: {
        inter: ["Inter"]
      }
    },
  },
  plugins: [],
}


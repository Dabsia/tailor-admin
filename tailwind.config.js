/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add your font here
        // roboto: ['Roboto', 'sans-serif'], // For Google Fonts example
      },
    },
  },
  plugins: [],
};

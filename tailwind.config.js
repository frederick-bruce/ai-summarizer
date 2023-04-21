/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satishi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      },
    },
  },
  plugins: [],
};

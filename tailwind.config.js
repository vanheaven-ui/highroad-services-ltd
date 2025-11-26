/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B2545", // Deep Navy Blue
        surface: "#F8FAFC", // Light gray/white background
        accentGold: "#CFA83B", // Gold accent
        accentGreen: "#0A6B4A", // Deep green accent
      },
      fontFamily: {
        heading: ["Merriweather", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

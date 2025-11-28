/** @type {import('tailwindcss').Config} */
module.exports = {
  // CRUCIAL: Must be 'class' to allow toggling the .dark class on the <html> element
  // This is a non-theme configuration handled by the JS file.
  darkMode: "class",

  // MANDATORY: Tells Tailwind where to scan for utility classes
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // In v4's CSS-first approach, the theme is defined in globals.css using the @theme directive.
  // We keep this object empty or omit it entirely to avoid conflicts.
  // We'll leave it in place, but empty.
  theme: {},

  plugins: [],
};

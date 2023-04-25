/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // orngnormal: "#EB6536",
        // orngmedium: "#F08763",
        // blkmedium: "#191919",
        // darkSecondary: "#25282A",
        // darkWhite: "#f2f5fa",
        // ===========
        banneryellow: "#fab750",
        darkprimary: "#203140",
      },
      boxShadow: {
        '3xl': '0 15px 40px rgba(10, 14, 18, 0.1)',
      }
    },
  },
  plugins: [],
}

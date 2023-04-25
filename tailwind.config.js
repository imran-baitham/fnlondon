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
        "orng-normal": "#EB6536",
        "orng-medium": "#F08763",
        "blk-medium": "#191919",
        // darkPrimary: "#181A1B",
        darkSecondary: "#25282A",
        darkWhite: "#f2f5fa",
        "dark-3": "#b8b8b8",
        // ===========
        banneryellow: "#fab750",
        darkprimary: "#203140",
        bgray: "#fefaf3",
        darktx: "#f37056",
        yellowtx: "#f3715e",
        iconclr: "#fdb456"
      },
      boxShadow: {
        '3xl': '0 15px 40px rgba(10, 14, 18, 0.1)',
      }
    },
  },
  plugins: [],
}

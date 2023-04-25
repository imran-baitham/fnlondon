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
        orngnormal: "#EB6536",
        orngmedium: "#F08763",
        blkmedium: "#191919",
        darkPrimary: "#181A1B",
        darkSecondary: "#25282A",
        darkWhite: "#f2f5fa",
        // ===========
        banneryellow: "#fab750",
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      NunitoSans: ["Nunito Sans", "sans-serif"],
      PTSerif: ["PT Serif", "sans-serif"],
    },
  },
  plugins: [],
}

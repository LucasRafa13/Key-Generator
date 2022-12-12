/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gradientBackground:
          "radial-gradient(100% 316.05% at 0% 50.97%, #3B82F6 0%, #A855F7 100%)"
      }
    }
  },
  plugins: []
}

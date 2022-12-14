/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      mdLg: { max: "820px" },
      // => @media (max-width: 820px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xsSm: { max: "530px" },
      // => @media (max-width: 530px) { ... }

      xs: { max: "490px" }
      // => @media (max-width: 490px) { ... }
    },
    extend: {
      backgroundImage: {
        gradientBackground:
          "radial-gradient(100% 316.05% at 0% 50.97%, #3B82F6 0%, #A855F7 100%)"
      },
      dropShadow: {
        custom: "0 2px 10px var(--blackA7)",
        checkboxFocus: "0 0 0 2px black"
      },
      colors: {
        checkboxHover: "var(--violet3)",
        violet11: "var(--violet11)",
        violet8: "var(--violet8)",
        violet3: "var(--violet3)",
        blackA3: "var(--blackA3)"
      }
    }
  },
  plugins: []
}

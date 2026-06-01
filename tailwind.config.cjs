/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FAF8F5",
        secondary: "#78716C",
        tertiary: "#FFFFFF",
        "black-100": "#F5F0EA",
        "black-200": "#EDE8DE",
        "white-100": "#1C1917",
        accent: "#7C3AED",
        "accent-light": "#EDE9FE",
      },
      boxShadow: {
        card: "0px 8px 40px -12px rgba(124, 58, 237, 0.15)",
        "card-hover": "0px 16px 50px -10px rgba(124, 58, 237, 0.25)",
        soft: "0px 4px 24px rgba(0,0,0,0.07)",
        "soft-hover": "0px 8px 32px rgba(0,0,0,0.12)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

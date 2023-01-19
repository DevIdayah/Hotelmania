module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 320px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    }, 
    extend: {
      colors: {
        creche: "#DEBF8D",
        primary: "#F4F5F7",
        secondary:"#F2A852",
        root: "#F4AA51",
        foot: "#243644"                          

      },
    },
  },
  plugins: [],
}


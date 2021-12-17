module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        secondary: "#fbfbfb",
        transparent: "transparent",
        discord: "#404EED",
        twitter: "#1DA1F2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

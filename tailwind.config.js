module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "4xl": "2000",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

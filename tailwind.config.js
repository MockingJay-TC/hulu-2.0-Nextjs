module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screen: {
        "4xl": "1920",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

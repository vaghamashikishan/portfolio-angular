/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#1a1a2e",
        textColor: "#d3d3d3",
        primaryButtonColor: "#0f4c75",
        secondaryButtonColor: "#3282b8",
        linkColor: "#bbe1fa",
        borderColor: "#3d3d5c",
        extra: "#dd7732"
      }
    },
  },
  plugins: [],
}


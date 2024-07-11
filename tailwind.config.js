/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Open Sans"],
      },
      spacing: {
        112: "28rem",
        128: "32rem",
      },
    },
  },
  plugins: [],
};

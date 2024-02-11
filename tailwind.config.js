/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      glob: "url(./src/img/glob.svg)",
      screens: {
        xs: "425px",
        sm: "375px",
        s: "320px",
      },
    },
  },
  plugins: [],
};

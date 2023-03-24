/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        main: "#0099CC",
        second:"#027fa8",
        whiteTrans: "rgba(255, 255, 255, 0.79)",
        blackTrans: "rgba(0, 0, 0, 0.71)",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    "./assets/**/*.css",
    "./components/*.vue,js",
    "./components/**/*.vue,js",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes:["retro", "coffee" ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "coffee",
 }
}

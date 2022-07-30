/** @type {import('tailwindcss').Config} */
module.exports =  {
  content:[
    "./assets/**/*.css",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./plugins/*.{js,ts}",
    // "./nuxt.config.{js,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes:[{
     mytheme: {
	 "primary": "#fed7aa",
	 "secondary": "#facc15",         
	 "accent": "#d8b4fe",          
	 "neutral": "#c38370",
	 "base-100": "#F6eee0",        
	 "info": "#c4b5fd",
	 "success": "#99f6e4",
	 "warning": "#b45309",
	 "error": "#ec4899",
     }
    },
    "coffee" ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "coffee",
 }
}

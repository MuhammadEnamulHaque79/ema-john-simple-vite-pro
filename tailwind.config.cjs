/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#136c89",

          "secondary": "#1109a3",

          "accent": "#fc0ca4",

          "neutral": "#312541",

          "base-100": "#37323E",

          "info": "#4063C4",

          "success": "#30D5AB",

          "warning": "#EC8209",

          "error": "#F16F7E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

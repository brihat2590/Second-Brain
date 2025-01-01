/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        purple:{
          600:"#5146e5",
          500:"#655ec4",
          200:"#dfe6fe"

        },
        gray:{
          100:"#fffefe",
          200:"#e6e9ed",
          600:"#8e929c"
        }
      }
    },
  },
  plugins: [],
}


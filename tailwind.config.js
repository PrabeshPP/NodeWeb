/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{ejs,js}"],
  theme: {
    extend: {
      fontFamily:{
        'neucha':['Neucha','cursive']
      },

      height:{
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      animation:{
        blob:"blob 7s infinite"
      },

      keyframes:{
        blob:{
          "0%":{
            transform:"translate(0px,0px) scale(1)",
          },
          "33%":{
            transform:"translate(30px,-50px) scale(1.1)",
          },
          "66%":{
            transform:"translate(20px,-20px) scale(0.9)",
          },
          "100%":{
            transform:"scale(1)"
          }
        }
      }
    },
    
  },
  plugins: [],
}

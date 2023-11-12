/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        "Primary-Purple": "hsl(259, 100%, 65%)",
        "Primary-Light-Red": "hsl(0, 100%, 67%)",
        "Neutral-White": "hsl(0, 0%, 100%)",
        "Neutral-Off-White": "hsl(0, 0%, 94%)",
        "Neutral-Light-Grey": "hsl(0, 0%, 86%)",
        "Neutral-Smokey-Grey": "hsl(0, 1%, 44%)",
        "Neutral-Off-Black": "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        "Poppins": ['Poppins', "sans-serif"],
      },
      fontSize: {
        "Input": "32px",
      }
    },
  },
  plugins: [],
}


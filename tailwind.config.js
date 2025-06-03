/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'openSans': ["Open Sans"],
        'paprika': ["Paprika"]
      },
      colors: {
        'primary':"#1BBF00",
        'secondary': "#160C6D",
        'third': "#141135",
        'bgTwo': "#F9F9FB"
      },
      maxWidth: {
        "container": "1170px"
      },
      backgroundImage: {
        'banner': "url('./assets/Banner.png')"
      }
    },
  },
  plugins: [],
}
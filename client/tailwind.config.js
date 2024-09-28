/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        buttonPrimaryColor: '#F9ED32',
        buttonErrorColor: '#C52C22',
        headerColor: '#0000E3',
        sidebarColor: '#364051',

      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        primary: '#b89272', // Define a primary color
        // secondary: '#D97706', // Define a secondary color
        // accent: '#4ADE80', // Define an accent color
        // customGray: '#F3F4F6', // Custom gray color
      },
    },
  },
  plugins: [],
};

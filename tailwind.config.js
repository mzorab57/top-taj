/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      animation: {
        slowPing: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite", // 2 چرکە
      },
      keyframes: {
        ping: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "75%, 100%": { transform: "scale(1.5)", opacity: "0.5" },
        },
      },
      fontFamily: {
        sans: ["Trifelia", "system-ui", "-apple-system", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        primary: "#033647", // Define a primary color
        // secondary: '#D97706', // Define a secondary color
        // accent: '#4ADE80', // Define an accent color
        // customGray: '#F3F4F6', // Custom gray color
      },
    },
  },
  plugins: [],
};

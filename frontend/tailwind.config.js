/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "#E5E7EB", // Define your border color
        background: 'hsl(var(--background))', // Using the CSS variable you defined
        foreground: 'hsl(var(--foreground))',
      },
    },
  },

  plugins: [],
}


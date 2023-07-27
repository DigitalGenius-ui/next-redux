/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        bgColor: "rgb(32, 32, 42)",
        todo: "rgba(58, 58, 67, 0.98)",
      },
    },
  },
  plugins: [],
};

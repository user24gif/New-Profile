/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        30: "30px",
      },
      backgroundColor: {
        "studio-white": "rgba(232, 229, 228, 0.5)",
      },
      borderRadius: {
        100: "100px",
      },
    },
  },
  plugins: [],
};

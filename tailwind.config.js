/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Archivo", defaultTheme.fontFamily.sans],
      },
      padding: {
        1.5: "0.375rem",
        2.5: "0.625rem",
        3.5: "0.875rem",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        "primary-pure": "#00747a",
        "primary-medium": "#004649",
        "primary-dark": "#002f31",
        "sand-pure": "#ebe5cf",
        "salmon-pure": "#dda67f",
      },
    },
  },
  plugins: [],
};

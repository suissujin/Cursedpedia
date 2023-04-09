const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Linux Libertine", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}

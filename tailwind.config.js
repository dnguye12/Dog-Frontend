/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "rgb(210 198 250)",
          "secondary": "rgb(251 222 155)",
          "accent": "rgb(73 71 159)",
          "neutral": "#3d4451",
          "neutral-content": "rgba(24 8 58)",
          "base-100": "#ffffff",
          "base-200": "rgb(244 240 252)",
          "base-300": "rgb(254 247 231)",
          "base-content": "rgb(44 24 84)",
          "error": "rgb(254 205 211)",
        }
      }
    ],
  }
}


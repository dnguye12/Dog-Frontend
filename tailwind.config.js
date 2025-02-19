/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'victoria': {
          '50': '#f3f4fb',
          '100': '#e4e6f5',
          '200': '#cfd4ee',
          '300': '#adb7e3',
          '400': '#8693d4',
          '500': '#6a73c7',
          '600': '#5659ba',
          '700': '#49479f',
          '800': '#46428b',
          '900': '#3a396f',
          '950': '#282645',
        },
        'marzipan': {
          '50': '#fff9eb',
          '100': '#fdedc8',
          '200': '#fbde9b',
          '300': '#f8c051',
          '400': '#f6a829',
          '500': '#f08610',
          '600': '#d4620b',
          '700': '#b0430d',
          '800': '#8f3411',
          '900': '#762c11',
          '950': '#441304',
        },
        'cinder': {
          '50': '#f7f6f9',
          '100': '#edebf3',
          '200': '#d7d3e4',
          '300': '#b3adcc',
          '400': '#8a80b0',
          '500': '#6b6097',
          '600': '#574c7d',
          '700': '#473e66',
          '800': '#3d3656',
          '900': '#373149',
          '950': '#100e15',
        },

      },
    },
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
          "success": "rgb(240 253 250)",
          "info": "rgb(239 246 255)"
        }
      }
    ],
  }
}


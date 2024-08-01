import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
  theme: {
    colors: {
      'mint': '#18C76F',
      'mint-dark': '#005528',
      'blue-light': '#90D8FF',
      'green': '#00FF5D',
      'blue': '#0089D3',
      'black': '#000000',
      'glass': "rgba(0,0,0,0.45)",
      'darkGlass': "rgba(0,0,0,0.65)",
      'offWhite': "#e6e6e6",
      'darkWhite': '#969696',
      'slate': '#252525',
      'slate-light': '#363636',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
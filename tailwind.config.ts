import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        lexendDeca: ['Lexend Deca', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        oxfordBlue: '#0B2B49',
        tropicalRainForest: '#006362',
        desertSand: '#E6C9A8',
        isabelline: '#F7F3EE',
        sinopia: '#D94C12',
        cutspink:'#F9E0C5',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
export default config;

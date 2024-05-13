import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }, colors: {
        'gold': '#FFB404'
      }, screens: {
        'opinions940': '940px',
        '3xl': '2000px',
      }
    },
    fontFamily: {
      'Jost': ['Jost'],
      'AdventPro': ['Advent Pro'],
      'Roboto': ['Roboto'],
    }
  },
  plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'irannum': 'irannum',
        'iranYekanLight': 'iranYekanLight',
        'iranYekanBlack': 'iranYekanBlack',
        'iranYekanBold': 'iranYekanBold',
        'iranYekanEBold': 'iranYekanEBold',
        'iranYekanEBlack2': 'iranYekanEBlack2',
        'iranYekanMedium': 'iranYekanMedium',
        'iranYekanRegular': 'iranYekanRegular',
        'iranYekanThin': 'iranYekanThin',
        'snapFoodBlack': 'snapFoodBlack',
        'snapFoodLight': 'snapFoodLight',
        'snapFoodRegular': 'snapFoodRegular',
        'shabnamBold': 'shabnamBold',
        'shabnamLight': 'shabnamLight',
        'shabnamMedium': 'shabnamMedium'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

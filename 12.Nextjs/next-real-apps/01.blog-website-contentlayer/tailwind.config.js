/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        dark:"#1b1b1b",
        light: "#fff",
        accent: "#7b00d3",
        accentDark: "#ffdb4d",
        gray: "#747474",
      },
      fontFamily:{
          mr: ["var(--font-mr)"],
          in: ["var(--font-in)"]
      }
    },
  },
  plugins: [],
}



// colors: {
//   dark: "#1b1b1b",
//   light: "#fff",
//   accent: "#7B00D3", 
//   accentDark: "#ffdb4d",
//   gray: "#747474",
// }
// backgroundImage: {
//   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//       'gradient-conic':
//   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
// },
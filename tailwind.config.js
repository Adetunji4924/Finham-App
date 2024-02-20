/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter'],
        Bricolage: ['Bricolage Grotesque']
      },

      colors: {
        secondary: ['rgba(31, 57, 196, 1)']
      },

      backgroundImage: {
        herowave: "url('./src/images/Waves.svg')",
        ellipse: "url('./src/images/Ellipse 2.svg')",
        left: "url('./src/images/Left.png')",
        sidebar: "url('./src/images/Sidebar.png')",
        footer: "url('./src/images/Frame 45733.png')"
      }
    },
  },
  plugins: [
    require ('tailwindcss-filters'),
  ],
}


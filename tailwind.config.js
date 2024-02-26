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
      },

      screens: {
        'xsm': '400px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require ('tailwindcss-filters'),
  ],
}


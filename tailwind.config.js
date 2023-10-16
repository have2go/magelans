/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo-white': 'url(../../public/logo-white.svg)',
        'logo-orange': 'url(../../public/logo-orange.svg)',
        'burger-icon': 'url(../../public/burger-icon.svg)',
        'whatsapp-icon': 'url(../../public/whatsapp-icon.svg)',
        'arrow-right': 'url(../../public/arrow-right.svg)',
        'arrow-right-orange': 'url(../../public/arrow-right-orange.svg)',
        'hexagon-empty': 'url(../../public/hexagon-empty.svg)',
        'hexagon-full': 'url(../../public/hexagon-full.svg)',
      },
      colors: {
        'orangeMag': '#FF6813',
        'greyCell': '#D9D9D9',
      }
    },
    screens: {
      '2xl': {'max': '1536px'},
      // => @media (max-width: 1536px) { ... }

      'xl': {'max': '1280px'},
      // => @media (max-width: 1280px) { ... }

      'lg': {'max': '1024px'},
      // => @media (max-width: 1024px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 768px) { ... }

      'sm': {'max': '480px'},
      // => @media (max-width: 480px) { ... }
    }
  },
  plugins: [],
}

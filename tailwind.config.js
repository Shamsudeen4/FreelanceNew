/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'sm': '330px',      // Custom small screen size
        'md': '768px',      // Custom medium screen size
        'lg': '1024px',     // Custom large screen size
        'xl': '1280px',     // Custom extra-large screen size
        '2xl': '1600px',  
        'sm': {'min': '330px', 'max': '767px'}, 
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '1024px'},
       },
    },
  },
  plugins: [],
}

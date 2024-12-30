
/**@type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#304AF5B',
          90: '#292C27',

        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#5B5B5B',
          90: '#141414',

        },
      },
    
      screens: {

        '3xl': '1688PX',
        '4xl': '2208px',

      },
      maxWidth: {
        '10xl': '1512px',

      },
      borderRadius: {
        '5xl': '48px',
      },
    },
  },
  plugins: [],

}; 
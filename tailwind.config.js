/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        orange: "#FA8E41",
        blue: "#48B3F2",
      },
      fontFamily: {
          'RHD600': {
            src: ['./assets/fonts/RedHatDisplay/RedHatDisplay-SemiBold.ttf']
          }
      },
      boxShadow: {
          'skillCard': '9px 9px 40px 13px rgba(13, 12, 12, 0.4), -6px -6px 40px 5px rgba(245, 249, 255, 0.4)',
          'contactMe': '9px 9px 73px 3px rgba(147,147,147,0.45), 9px 9px 49px 5px rgba(0,0,0,0.45)',
          'bigButton': '-9px -9px 20px rgba(101,107,117,0.2), 9px 9px 24px 8px rgba(1,5,11,0.25)',
          'blockShadow': '-4px -4px 104px 2px rgba(172,172,172,0.2),9px 9px 35px 8px rgba(0,0,0,0.25)',
          'skillField': 'inset 8px 4px 44px rgba(0,0,0,0.25)'
      }
    }
  },
  plugins: []
};
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
      }
    }
  },
  plugins: []
};
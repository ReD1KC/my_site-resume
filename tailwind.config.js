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
        skillCard : "9px_9px_40px_13px_rgba(13,12,12,0.4),-6px_-6px_40px_5px_rgba(245,249,255,0.4)",
      }
    }
  },
  plugins: []
};
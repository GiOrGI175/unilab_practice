/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        NavTxtClr: '#003459',
        BtnClr: '#003459',
        WhiteTxt: '#FDFDFD',
        primaryClr: '#002A48',
        NeutralClr: '#242B33',
      },
      fontFamily: {
        myriad: ['Myriad Pro', 'sans-serif'], // Add your custom font
      },
      backgroundImage: {
        'header-gradient':
          'linear-gradient(65deg, #FCEED5 0%, #FCEED5 100%, #FFE7BA 100%)',
      },
    },
  },
  plugins: [],
};

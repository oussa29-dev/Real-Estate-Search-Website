
module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    // Add more paths if needed
  ],
  theme: {
    extend: {
   
      backgroundImage: {
        'custom-m-gradient': 'linear-gradient(176deg, #022D46 25.22%, #031824 36.73%, #051732 74.51%, #1E3A55 95.08%)',
      },
      boxShadow: {
        custom: '0px 4px 20px 0px #0D587B',
        'custom-shadow': '0px 4px 50px 0px #6E94CEB5',
        'custom-custom-shadow': '0px 4px 80px 0px #0300176E',
        'card-shadow': '0px 4px 70px 0px #6E94CE2E',
        'accueil-shadow': '0px 1px 30px 0px #0000001A',
      },
      height: {
        '183': '45rem', // Correct syntax for custom width
        '150': '37.5rem',
      },
      width: {
        '140': '35rem', // Correct syntax for custom width
        '125':  '31.25rem',
      },
      margin: {
        '148': '37rem', // Correct syntax for custom width
      },
      // backgroundImage: {
      //   'custom-gradient': 'linear-gradient(338.52deg, #279EB4 16.86%, #02345A 95.27%)',
      // },
      colors: {
        'primary':{
          100: '#F97068'
        },
        'secondary':{
          100: '#6E94CE'
        },
        'third':{
          100: '#D9D9D9'
        },
        'fourth':{
          100: '#F7EFE5'
        },
        'fifth':{
          100: '#04172C'
        },
        'sisth':{
          100: '#041527'
        },
        'seventh':{
          100: '#22576E'
        },
        'eighth':{
          100: '#4D4949'
        }
      },
      fontFamily: {
        body: [
          "Poppins"
        ],
        core: [
          "Fredoka"
        ],
      },
    },
  },
  plugins: [],
};
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'maindiv': 'inset 0 -5px 4px 0px rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        'montserrat': ['"Montserrat"', 'sans-serif']
      },
      animation:{
        'centersideleft':'centersideleft ease-in-out 0.8s ',
        'leftside':'leftside ease-in-out 0.8s ',
        'rightside':'rightside ease-in-out 0.8s ',
      },
      keyframes: {
        leftside:{
          '0%':{transform: 'translate(-1.5rem,0px)'}, 
          '50%':{transform: 'translate(1rem,0px)'},
          '100%':{transform: 'translate(0px,0px)'}, 
        },
        rightside:{
          '0%':{transform: 'translate(1.5rem,0px)'},
          '50%':{transform: 'translate(-1rem,0px)'},
          '100%':{transform: 'translate(0px,0px)'},
        },
        centersideleft:{
          '0%':{transform: 'scaleX(110%) translate(-10%,0px)'},
          '100%':{transform: 'scaleX(100%)'},
        }
      },
    },
  },
  plugins: [],

}

module.exports = {
  future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
  },
  purge: [],
  // See links below for purgeCss guide
  // https://markus.oberlehner.net/blog/setting-up-tailwind-css-with-vue/
  // https://medium.com/@FlorianWoelki/vue-3-and-tailwindcss-2041fea3bcd2
  // purge: [
  //     './public/**/*.html',
  //     './src/**/*.vue',
  // ],
  theme: {
      extend: {
          borderWidth: {
              default: '1px',
              '0': '0',
              '1': '1px',
          },
          height: {
              '2/3': '66%',
              '2/5': '40%',
              '1/4': '25%',
              '1/2': '50%'
          }, 
          colors:{
            blue: '#061089',
            white: '#FFFFFF',
            black: '#000000'
        }
        
      },
      fontFamily:{
        'sans': ['"sans"', "sans-serif"]
    }
  },
  variants: {},
  plugins: [],
}
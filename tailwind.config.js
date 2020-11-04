module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
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
      colors: {
        blue: '#061089',
        white: '#FFFFFF',
        black: '#000000',
        limitdGray: '#ededed',
        limitdLightGray: '#fafafa',
      },
      spacing: {
        '7': '1.75rem',
        '14': '3.5rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '28': '7rem',
        '30': '7.5rem',
        '36': '9rem',
        '44': '11rem',
        '52': '13rem',
        '60': '15rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }

    },
    fontFamily: {
      'sans': ['"sans"', "sans-serif"]
    }
  },
  variants: {},
  plugins: [],
}

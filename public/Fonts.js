import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Roboto';
        src: url('roboto.eot'); /* IE9 Compat Modes */
        src: url('roboto.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('roboto.woff2') format('woff2'), /* Super Modern Browsers */
            url('roboto.woff') format('woff'), /* Pretty Modern Browsers */
            url('roboto.ttf')  format('truetype'), /* Safari, Android, iOS */
            url('roboto.svg#svgFontName') format('svg'); /* Legacy iOS */
      }
      `}
  />
)

export default Fonts
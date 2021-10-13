import { ChakraProvider } from '@chakra-ui/react'
import "@fontsource/raleway/400.css"
import "@fontsource/open-sans/700.css"
import "@fontsource/inter"
import Fonts from "../public/Fonts"
import theme from "../public/theme"


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
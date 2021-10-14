import { ChakraProvider } from '@chakra-ui/react'
import "roboto-fontface"
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
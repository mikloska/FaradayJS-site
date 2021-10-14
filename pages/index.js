import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../public/components/Navbar'
import Footer from '../public/components/Footer'
import { Box, Button, Heading, Stack, VStack, Text, keyframes, Img, Link, Center, Divider } from "@chakra-ui/react"

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}
`;

const shake = keyframes`
  from {transform: rotate(-5deg);}
  to {transform: rotate(5deg);}
  from {transform: rotate(5deg);}
  to {transform: rotate(-5deg);}
  from {transform: rotate(-5deg);}
  to {transform: rotate(5deg);}
`;

export default function Home() {
  const spinAnimation = `${spin} infinite 10s linear`;
  const shakeAnimation = `${shake} infinite 10s linear`;

  return (
    <div>
      <Navbar/>
      <div className={styles.container}>
        <Head>
          <title>FaradayJS</title>
          <meta name="FaradayJS" content="secure your app" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        

        <main className={styles.main}>
          <Stack className={styles.sec} direction={['column-reverse','column-reverse','row','row']} maxW='1000px' w={['90vw','90vw','90vw','70vw']} justify='center' p="4">
            <Stack className={styles.sec} mb={2} direction={['column','column','row','row']} justify='center' align='center'>
              <div>
                <Box mx={2}>
                  <center>
                    <Stack spacing={3}>
                      <Heading as="h2" size="3xl">
                        Welcome to FaradayJS
                      </Heading>
                      <Text pt="4vw" fontSize="2xl" color="navy.800">
                        Test your ElectronJS application to assure it follows the recommended application settings for optimal user security. 
                      </Text>
                    </Stack>
                  </center>
                  </Box>
              </div>         
            </Stack>
            <Stack mb={2} direction={['column','column','row','row']} justify='center' align='center'>
              <div mx={2}>
                <center>
                  <Img animation={spinAnimation} src="/faraday-logo-cropped.PNG" alt="FaradayJSLogo" maxWidth="150%"/>
                </center>
              </div>
            </Stack>
          </Stack>
          
          <Stack className={styles.sec} mt="10" direction={['column','column','row','row']} maxW='1000px' w={['90vw','90vw','90vw','70vw']} justify='center' align='center' p="4">
            <Stack className={styles.sec} mb={2} direction={['column','column','row','row']} maxWidth="40%" pb="20" justify='center' align='center'>
                <div mx={2}>
                  <center>
                    <Text fontSize="2xl"color="navy.800" pb="20">
                      Take a look at how you can use FaradayJS with a step by step guide through.
                    </Text>
                     <Link href="/Guide">
                    <Button bg="blue.900" variantcolor="#74BF9E" color="white" variant="solid" width={['30vw', '30vw', '30vw', '25vw']}>
                      User Guide
                    </Button>
                  </Link>
                  </center>
                </div>
              </Stack>
              <Divider border="0px" borderColor="white"/>
              <Stack className={styles.sec} mb={2} direction={['column','column','row','row']} maxWidth="50%" pb="20" justify='center' align='center'>
                <div>
                  <center>
                    <Text fontSize="2xl"color="navy.800" pb="10">
                      Simply download the installer for your computer system and visit our guide to learn how to get started using FaradayJS. 
                      {/* Click on the link below to navigate to the Github page with installer options. */}
                    </Text>
                    <Link href="https://github.com/oslabs-beta/FaradayJS/releases">
                      <Button bg="blue.900" variantcolor="#74BF9E" color="white" variant="solid" width={['30vw', '30vw', '30vw', '25vw']}>
                        Download Options
                      </Button>
                    </Link>
                  </center>
                </div>
              </Stack>
            </Stack>

          <Stack className={styles.sec} direction={['column','column','row','row']} pb="20" maxW='1000px' w={['90vw','90vw','90vw','70vw']} justify='center' align='center' p="4">
            <Stack className={styles.sec} mb={2} direction={['column','column','row','row']} maxWidth="50%" justify='center' align='center'>
                <div>
                  <center>
                    <Heading pb="5vw" as="h2" size="2xl">
                        Identify Insecure Settings
                      </Heading>
                    <Text pb="5vw" fontSize="2xl"color="navy.800">
                      Pinpoint the names of the files that contain the settings which are set to a value that introduces potential security risks.
                    </Text>
                  </center>
                </div>
              </Stack>
              <Divider border="0px" borderColor="white"/>
              <Stack className={styles.sec} direction={['column','column','row','row']} maxWidth="50%" justify='center' align='center'>
                <div>
                  <center>
                   <Heading pb="5vw" as="h2" size="2xl">
                        Narrow Down the Folders for Parsing 
                      </Heading>
                    <Text pb="5vw" fontSize="2xl"color="navy.800">
                      If you would like to specify any folders that you would like to omit from being parsed, simmply enter the name of the folders. They will not be looked at for potential security concerns. 
                    </Text>
                  </center>
                </div>
              </Stack>
            </Stack>

          <Stack className={styles.sec} direction={['column','column','row','row']} maxW='1000px' w={['90vw','90vw','90vw','70vw']} justify='center' pb="20">
            <Stack className={styles.sec} mb={2} direction={['column','column','row','row']} justify='center' align='center'>
                <div mx={2} border="1px" borderColor="gray.200">
                  <center>
                  <Heading pt="1vw" as="h2" size="2xl">
                        Security is Important, Let us Help!
                      </Heading>
                  </center>
                </div>
              </Stack>
              <Stack className={styles.sec} mb={2} direction={['column','column','row','row']} justify='center' align='center'>
                <div mx={2} border="1px" borderColor="gray.200">
                  <center>
                    <Img animation={shakeAnimation} src="/security-shield.png" alt="FaradayJSLogo" maxWidth="100%"/>
                  </center>
                </div>
              </Stack>
              <Stack className={styles.sec} mb={2} direction={['column-reverse','column','row','row']} justify='center' align='center'>
                <div>
                  <Box mx={2}>
                    <center>
                      <Stack spacing={3}>
                        <Text pt="1vw" fontSize="2vw" color="gray.800">
                            "With great power comes great responsility." - Uncle Ben
                          </Text>
                      </Stack>
                    </center>
                    </Box>
                </div>         
              </Stack>
            </Stack>
        </main>
        <Footer/>

      </div>
    </div>
  )
}

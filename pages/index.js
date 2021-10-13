import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../public/components/Navbar'
import Footer from '../public/components/Footer'
import { Box,Flex, Button, Heading, Stack, VStack, Text, keyframes, Img, Link } from "@chakra-ui/react"

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}
`;

const shake = keyframes`
  from {transform: rotate(-5deg, 5deg);}
  to {transform: rotate(5deg, -5deg)}
  from {transform: rotate(5deg, -5deg;}
  to {transform: rotate(-5deg, 5deg)}
`;

export default function Home() {
  const spinAnimation = `${spin} infinite 5s linear`;
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
          {/* <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1> */}
          {/* Change flex direction to column when screen is resized */}
          <Flex className={styles.sec} direction={['column','column','row','row']} maxW='1000px' w={['90vw','90vw','90vw','70vw']} justify='center' p="4">
            <Flex  mb={2} direction={['column','column','row','row']} justify='center' align='center'>
              <Box mx={2} border="1px" borderColor="gray.200" width="36vw" height="36vw">
                <center>
                  <Stack spacing={3}>
                    <Heading as="h2" size="3xl">
                      Welcome to FaradayJS
                    </Heading>
                    <Text pt="4vw" fontSize="xl" color="navy.800">
                      Test your application to assure it follows the recommended ElectronJS application settings for optimal user security. 
                    </Text>
                  </Stack>
                </center>
              </Box>         
            </Flex>
            <Flex mb={2} direction={['column','column','row','row']} justify='center' align='center'>
              <center>  
                <Box mx={2} border="1px" borderColor="gray.200" width="36vw" height="36vw">
                  <Box className="animate" pt="5vw" animation={spinAnimation} justify='center'>
                    <Img className="animate" src="/faraday-logo-cropped.PNG" alt="FaradayJSLogo" width="20vw" height="20vw"/>
                  </Box>
                </Box>
              </center>
            </Flex>
          </Flex>
          <Flex className={styles.sec} direction={['column','column','row','row']} maxW='1000px' w={['90vw','90vw','90vw','70vw']} justify='center' p="4">
            <Flex mb={2} direction={['column','column','row','row']} justify='center' align='center'>
                <center>  
                <Box mx={2} border="1px" borderColor="gray.200" width="36vw" height="36vw">
                  <Text fontSize="xl"color="navy.800">
                    Take a look at 
                  </Text>
                  <Link href="/Guide">
                    <Button bg="blue.900" variantcolor="#74BF9E" color="white" variant="solid" width={['30vw', '30vw', '30vw', '23vw']}>
                      Learn How to Use FaradayJS
                    </Button>
                  </Link>
                </Box>
                </center>            
            </Flex>
            <Flex mb={2} direction={['column','column','row','row']} justify='center' align='center'>
              <Box mx={2} border="1px" borderColor="gray.200" width="36vw" height="36vw">
                <center>
                  <Text fontSize="xl"color="navy.800">
                    Simply download the installer for your computer system.
                  </Text>
                  <Link href="/Download">
                    <Button bg="blue.900" variantcolor="#74BF9E" color="white" variant="solid" width={['30vw', '30vw', '30vw', '23vw']}>
                      Go to Download Options
                    </Button>
                  </Link>
                </center>
              </Box>
            </Flex>
          </Flex>
          <Flex className={styles.sec} direction={['column','column','row','row']} maxW='1000px' w={['90vw','90vw','90vw','70vw']} justify='center' p="4">
            <Flex mb={2} direction={['column','column','row','row']} justify='center' align='center'>
              <Box mx={2} border="1px" borderColor="gray.200" width="36vw" height="36vw">
                <center>
                  <Heading pb="1vw" as="h2" size="xl">
                      Identify Insecure Settings
                    </Heading>
                  <Text pb="4vw" fontSize="xl"color="navy.800">
                    Pinpoint the names of the files that contain the settings which are set to a value that introduces potential security risks.
                  </Text>
                  <Heading pb="1vw" as="h2" size="xl">
                      Narrow Down the Folders for Parsing 
                    </Heading>
                  <Text pb="4vw" fontSize="xl"color="navy.800">
                    If you would like to specify any folders that you would like to omit from being parsed, simmply enter the name of the folders. They will not be looked at for potential security concerns. 
                  </Text>
                </center>
              </Box>
            </Flex>
            <Flex mb={2} direction={['column','column','row','row']} justify='center' align='center'>
              <Box mx={2} border="1px" borderColor="gray.200" width="36vw" height="36vw">
                <center>
                  <Stack spacing={3}>
                    <Heading pt="1vw" as="h2" size="2xl">
                      Security is Important
                    </Heading>
                    <center>
                    <VStack spacing={20}>
                      <Box animation={shakeAnimation}>
                        <Img src="/security-shield.png" alt="security" width="20vw" height="20vw"/>
                      </Box>
                    </VStack>
                    <Text pt="1vw" fontSize="1.2vw" color="gray.800">
                      "With great power comes great responsility." - Uncle Ben
                    </Text>
                  </center>
                  </Stack>
                </center>
              </Box>
            </Flex>
          </Flex>
    
        </main>
        <Footer/>

      </div>
    </div>
  )
}

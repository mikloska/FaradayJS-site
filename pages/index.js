import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../public/components/Navbar'
import Footer from '../public/components/Footer'
import { Box, Button, Heading, Stack, VStack, Text, keyframes, Img, Link, Center, Divider, Flex } from "@chakra-ui/react"

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
        
        {/* <div className={styles.container}> */}
        <main className={styles.main}>
          <Stack w={'100%'} mb={20} align='center' justify='center' direction={['column-reverse','column-reverse','row','row']} p="4">
            <Flex justify='center' align='center' mb={2} direction={['column','column','row','row']}>
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
            </Flex>
            <Stack width={'50%'} mb={2} direction={['column','column','row','row']} justify='center' align='center'>
              <div>
                <center>
                  <Img animation={spinAnimation} src="/faraday-logo-cropped.PNG" alt="FaradayJSLogo" maxWidth="150%"/>
                </center>
              </div>
            </Stack>
          </Stack>
          {/* <img src='/Clipboard04.jpg' width={'100%'} height={'100%'}/> */}

          <Stack  mb={20} direction={['column-reverse','column-reverse','row-reverse','row-reverse']} w={'100%'} align='center' justify='center' p="4">
            <Stack  m={5} direction={['column','column','row','row']}  justify='center' align='center'>
              <Stack direction='column' align='center'>
                <center>
                  <Text fontSize="2xl"color="navy.800" pb="12">
                    Take a look at how you can use FaradayJS with a step by step guide.
                  </Text>
                </center>
                <Link href="/Guide">
                  <Button
                    color="white"
                    borderWidth="3px"
                    borderStyle="solid"
                    borderColor="gray"
                    backgroundColor="#2F4F4F"
                    fontWeight="bold"
                    // px={3}
                    // py={2}
                    display="block"
                    height="3vw"
                    _hover={{
                      backgroundColor: 'gray.100',
                      color: 'black',
                    }}
                    _pressed={{
                      backgroundColor: 'gray.700',
                      color: '#2F4F4F',
                    }}
                    height={'40px'}
                    width={'150px'}
                  >User Guide</Button>
                {/* <Button bg="#2F4F4F" variantcolor="#696969" color="white" variant="solid" width={['30vw', '30vw', '30vw', '25vw']}>
                  User Guide
                </Button> */}
                </Link> 
              </Stack>        
            </Stack>
            <Stack direction='column' align='center'>
              <center>
                <Text fontSize="2xl"color="navy.800" pb="12">
                  Simply download the installer for your operating system and start using FaradayJS.
                </Text>
              </center>

                <Link href="https://github.com/oslabs-beta/FaradayJS/releases" target="_blank"  rel="noreferrer" >
                  <Button
                    color="white"
                    borderWidth="3px"
                    borderStyle="solid"
                    borderColor="gray"
                    backgroundColor="#2F4F4F"
                    fontWeight="bold"
                    // px={3}
                    // py={2}
                    display="block"
                    height="3vw"
                    _hover={{
                      backgroundColor: 'gray.100',
                      color: 'black',
                    }}
                    _pressed={{
                      backgroundColor: 'gray.700',
                      color: '#2F4F4F',
                    }}
                    height={'40px'}
                    width={'200px'}
                  >Download Options</Button>
                {/* <Button bg="#2F4F4F" variantcolor="#696969" color="white" variant="solid" width={['30vw', '30vw', '30vw', '25vw']}>
                  User Guide
                </Button> */}
                </Link> 
              </Stack>     

          </Stack>

          <Stack mb={20} direction={['column-reverse','column-reverse','row','row']} w={'100%'} align='center' justify='center' p="4">
            <Stack  m={5} direction={['column','column','row','row']}  justify='center' align='center'>
              <Stack direction='column' align='center'>
                <center>
                  <Heading pb="2vw" as="h2" size="2xl">
                    Identify Insecure Settings
                  </Heading>
                  <Text pb="5vw" fontSize="2xl"color="navy.800">
                    Pinpoint the names of the files that contain the settings which are set to a value that introduces potential security risks.
                  </Text> 
                </center>
              </Stack>        
            </Stack>
            <Stack direction='column' align='center'>
              <Img src='/failing-tests-app.png'  alt="FaradayJSFailedTests" width={'100%'} height={'100%'}/>
            </Stack>     

          </Stack>

          <Stack mb={20} direction={['column-reverse','column-reverse','row','row']} w={'100%'} align='center' justify='center' p="4">
            <Stack  m={5} direction={['column','column','row','row']}  justify='center' align='center'>
              <Stack direction='column' align='center'>
                <center>
                  <Heading pb="2vw" as="h2" size="2xl">
                    Narrow Down the Folders for Parsing 
                  </Heading>
                  <Text pb="5vw" fontSize="2xl"color="navy.800">
                    Simply enter the name of the folders you would like to be omitted from parsing. 
                  </Text> 
                </center>
              </Stack>        
            </Stack>
            <Stack direction='column' align='center'>
              <Img src='/passing-test-app.png'  alt="FaradayJSFailedTests" width={'100%'} height={'100%'}/>
            </Stack>     

          </Stack>

          <Stack className={styles.sec} direction={['column','column','row','row']} w={'100%'} align='center'>
            <Stack className={styles.sec} mb={2} direction={['column','column','row','row']}>
                <div>
                  <center>
                  <Heading pt="1vw" as="h2" size="2xl">
                        Security is Important, Let us Help!
                      </Heading>
                  </center>
                </div>
              </Stack>
              <Stack className={styles.sec} mb={2} direction={['column','column','row','row']} justify='center' align='center'>
                <div>
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
                        <Text pt="1vw" fontSize="3vw" color="gray.800">
                            <q>With great power comes great responsility.</q> - Uncle Ben
                          </Text>
                      </Stack>
                    </center>
                    </Box>
                </div>         
              </Stack>
            </Stack>
            
        </main>
        

      {/* </div> */}
      <Footer/>
      </div>
    </div>
  )
}

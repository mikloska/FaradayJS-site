import Navbar from '../public/components/Navbar'
import Footer from '../public/components/Footer'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { Box,Flex } from "@chakra-ui/react"

export default function Guide(){
  return(
    <div>
    <Navbar/>
    <div className={styles.container}>
    <Head>
      <title>FaradayJS</title>
      <meta name="FaradayJS" content="secure your app" />
      <link rel="icon" href="/favicon.png" />
    </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          How to Use FaradayJS
        </h1>
        {/* Change flex direction to column when screen is resized */}
        <Flex direction={['column','column','row','row']} maxW='1000px' w={['90vw','90vw','90vw','70vw']} justify='center' p="4">
          <Flex  m={5} direction={['column','column','row','row']} justify='center' align='center'>
            <Box m={5} mx={2} bg='red' width={100} height={100}>1</Box>         
          </Flex>
          <Flex m={5} direction={['column','column','row','row']} justify='center' align='center'>
            <Box m={5} mx={2} bg='pink' width={100} height={100}>2</Box>
          </Flex>
        </Flex>
        <Flex direction={['column','column','row','row']} maxW='1000px' w={['90vw','90vw','90vw','70vw']} justify='center' p="4">
          <Flex m={5} direction={['column','column','row','row']} justify='center' align='center'>
            <Box m={5} mx={2} bg='green' width={100} height={100}>3</Box>
          </Flex>
          <Flex m={5} direction={['column','column','row','row']} justify='center' align='center'>
            <Box m={5} mx={2} bg='black' width={100} height={100}>4</Box>
          </Flex>
        </Flex>

  
      </main>
      <Footer/>
      </div>
    </div> 
  )
}
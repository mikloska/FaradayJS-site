import Navbar from '../public/components/Navbar'
import Footer from '../public/components/Footer'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { Box,Flex, Stack, Img } from "@chakra-ui/react"
import Image from 'next/image'

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
          User Guide
        </h1>
        {/* Change flex direction to column when screen is resized */}
        <Stack direction={['column-reverse','column-reverse','row','row']} w={['90vw','90vw','90vw','70vw']} justify='center' p="4">
          <Flex  m={5} direction={['column','column','row','row']} justify='center' align='center'>
            <div>First enter the names of the files and folders you would like to ignore or leave it blank to run on entire project. Click Run Tests.</div>         
          </Flex>
          <Flex m={5} direction={['column','column','row','row']} justify='center' align='center'>
            <Img src='/Clipboard02.jpg' width={'100%'} height={'100%'}/>
          </Flex>
        </Stack>
        <Flex direction={['column','column','row','row']} maxW='1000px' w={['90vw','90vw','90vw','70vw']} justify='center' p="4">
          <Flex m={5} direction={['column','column','row','row']} justify='center' align='center'>
          <Img src='/Clipboard03.jpg' width={'100%'} height={'100%'}/>
          </Flex>
          <Flex m={5} direction={['column','column','row','row']} justify='center' align='center'>
            <div>Select the root folder of your Electron app.</div>
          </Flex>
        </Flex>

        <Stack direction={['column-reverse','column-reverse','row','row']} maxW='1000px' w={['90vw','90vw','90vw','70vw']} justify='center' p="4">
          <Flex  m={5} direction={['column','column','row','row']} justify='center' align='center'>
            <div>View your test results, read about the importance of the settings and fix errors.</div>         
          </Flex>
          <Flex m={5} direction={['column','column','row','row']} justify='center' align='center'>
            <Img src='/Clipboard04.jpg' width={'100%'} height={'100%'}/>
          </Flex>
        </Stack>
        <Flex direction={['column','column','row','row']} maxW='1000px' w={['90vw','90vw','90vw','70vw']} justify='center' p="4">
          <Flex m={5} direction={['column','column','row','row']} justify='center' align='center'>
          <Img src='/Clipboard05.jpg' width={'100%'} height={'100%'}/>
          </Flex>
          <Flex m={5} direction={['column','column','row','row']} justify='center' align='center'>
            <div>Enjoy your more secure Electron app.</div>
          </Flex>
        </Flex>

  
      </main>
      <Footer/>
      </div>
    </div> 
  )
}
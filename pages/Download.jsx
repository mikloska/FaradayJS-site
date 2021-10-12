import Navbar from '../public/components/Navbar'
import Footer from '../public/components/Footer'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Head from 'next/head'
import { Center,Flex } from "@chakra-ui/react"

export default function Download(){
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
          Download
        </h1>
        <Flex direction={['column','column','row','row']} maxW='1000px' w={['90vw','90vw','90vw','70vw']} justify='center'>
          <Center m={10}><a href='' ><Image src='/linux-logo.png' alt='linux' width={150} height={188}/></a></Center>
          <Center m={10}><a href='' ><Image src='/windows-logo.png' alt='windows' width={150} height={188}/></a></Center>
          <Center m={10}><a href='' ><Image src='/mac-logo.png' alt='mac' width={150} height={188}/></a></Center>
        </Flex>

  
      </main>
      <Footer/>
      </div>
    </div> 
  )
}


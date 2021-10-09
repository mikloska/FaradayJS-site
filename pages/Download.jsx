import Navbar from '../public/components/Navbar'
import Footer from '../public/components/Footer'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Head from 'next/head'
import { Center, Grid, GridItem } from "@chakra-ui/react"

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
        <Center>
          <Grid templateColumns="repeat(3, 10fr)" gap={6}>
          <GridItem rowSpan={2}> <Image src='/linux.png' alt='linux' width={150} height={150}/></GridItem>
          <GridItem rowSpan={2}> <Image src='/windows.png' alt='windows' width={150} height={150}/></GridItem>
          <GridItem rowSpan={2}><Image src='/mac.png' alt='mac' width={150} height={150}/></GridItem>
          </Grid>
        </Center>
  
      </main>
      <Footer/>
      </div>
    </div> 
  )
}


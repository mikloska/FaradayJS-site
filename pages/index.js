import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../public/components/Navbar'
import Footer from '../public/components/Footer'


export default function Home() {
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
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

  
      </main>
      <Footer/>

    </div>
    </div>
  )
}

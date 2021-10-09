import Navbar from '../public/components/Navbar'
import Footer from '../public/components/Footer'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Head from 'next/head'

export default function Team(){
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
          The Team
        </h1>
        <table align="center">
          <tbody>
          <tr>
            <td valign="top"> <img src='https://avatars.githubusercontent.com/u/72828456?v=4' alt="Kelsey" width="250" height="250"/></td>
            <td valign="top"> <img src='https://avatars.githubusercontent.com/u/12378147?v=4' alt="Rosio" width="250" height="250"/></td>
            <td valign="top"> <img src='https://avatars.githubusercontent.com/u/64326677?v=4' alt="Heeho" width="250" height="250"/></td>
            <td valign="top"> <img src='https://avatars.githubusercontent.com/u/33673616?v=4' alt="Miklos" width="250" height="250"/></td>
          </tr>
          <tr>
              <td valign="top"><h2 align="center">Kelsey Flynn</h2></td>
              <td valign="top"><h2 align="center">Rosio Reyes</h2></td>
              <td valign="top"><h2 align="center">Heeho Kang</h2></td>
              <td valign="top"><h2 align="center">Miklós Kertész</h2></td>
          </tr>
          <tr>
              <td align="center"><a href="https://github.com/keflynn" target="_blank"  rel="noreferrer" align="center"> <Image src="/GitHub-Mark-64px.png" alt="kelseyGitHub" width="50" height="50"/></a></td>
              <td align="center"><a href="https://github.com/RRosio" target="_blank"  rel="noreferrer" align="center"> <Image src="/GitHub-Mark-64px.png" alt="rosioGitHub" width="50" height="50"/></a></td>
              <td align="center"><a href="https://github.com/Murphypie" target="_blank"  rel="noreferrer" align="center"> <Image src="/GitHub-Mark-64px.png" alt="heehoGitHub" width="50" height="50"/></a></td>
              <td align="center"><a href="https://github.com/mikloska" target="_blank"  rel="noreferrer" align="center"> <Image src="/GitHub-Mark-64px.png" alt="miklosGitHub" width="50" height="50"/></a></td>
          </tr>
          </tbody>
        </table>

  
      </main>
      <Footer/>

    </div> 
    </div>
    
    )
}
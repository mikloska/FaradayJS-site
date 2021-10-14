import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import { Stack } from "@chakra-ui/react"

export default function Footer(){
  return( 
  <div className={styles.footer}>
    <Stack direction='column'>
      <a href="https://opensourcelabs.io/" target="_blank"  rel="noreferrer" align="center"><Image src='/oslabs-white.png' mb={10} width={140} height={48}/></a>
      <div>Copyright © {new Date().getFullYear()} FaradayJS</div>
    </Stack>
  </div>)
}
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import { Stack } from "@chakra-ui/react"

export default function Footer(){
  return( 
  <div className={styles.footer}>
    <Stack direction='column'>
      <Image src='https://opensourcelabs.io/images/oslabs-white.png' mb={10} width={130} height={48}/>
      <div>Copyright © {new Date().getFullYear()} FaradayJS</div>
    </Stack>
  </div>)
}
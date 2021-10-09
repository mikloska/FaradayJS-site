import styles from '../../styles/Home.module.css'

export default function Footer(){
  return( 
  <div className={styles.footer}>
    Copyright © {new Date().getFullYear()} FaradayJS
  </div>)
}
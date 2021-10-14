import { Menu, Button, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup,
  MenuIcon, MenuCommand,  MenuDivider, Stack, useMediaQuery, Box } from "@chakra-ui/react"
import {HamburgerIcon} from '@chakra-ui/icons'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import FullMenu from './FullMenu'
import MobileMenu from './MobileMenu'
import { useRouter } from 'next/router'


// function ActiveLink({ children, href }) {
//   const router = useRouter()
  // const style = {
  //   marginRight: 10,
    // color: router.asPath === href ? 'red' : 'black',
  // }


export default function Navbar(){
  const router = useRouter()
  const handleGuideClick = (e) => {
    e.preventDefault()
    router.push("/Guide")
  }
  const handleTeamClick = (e) => {
    e.preventDefault()
    router.push("/Team")
  }
  const [ isLessThan768 ] = useMediaQuery(["(max-width: 768px)"]);

  return(
    <div className={styles.header}>
      <a href="/"  className={styles.logo}><Image src='/faraday-logo-new-inverted.png' alt='logo' width={200} height={43}/></a>
      {isLessThan768 ? <MobileMenu handleGuideClick={handleGuideClick} handleTeamClick={handleTeamClick}/> : <FullMenu handleGuideClick={handleGuideClick} handleTeamClick={handleTeamClick}/>}
    </div>
  )
}
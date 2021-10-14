import { Menu, Button, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup,
  MenuIcon, MenuCommand,  MenuDivider, Flex, Spacer,useMediaQuery, Box } from "@chakra-ui/react"
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
    <Flex className={styles.header} direction='row'>
      <a href="/"  className={styles.logo}><Image src='/faraday-logo-new-inverted.png' alt='logo' width={200} height={43}/></a>
      <Spacer/>
      {isLessThan768 ? <MobileMenu handleGuideClick={handleGuideClick} handleTeamClick={handleTeamClick}/> : <FullMenu handleGuideClick={handleGuideClick} handleTeamClick={handleTeamClick}/>}
    </Flex>
  )
}
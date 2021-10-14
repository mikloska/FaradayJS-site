import Link from 'next/link'
import { Menu, Button, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup,
  MenuIcon, MenuCommand,  MenuDivider, Stack, useMediaQuery, Box } from "@chakra-ui/react"
import {HamburgerIcon} from '@chakra-ui/icons'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import FullMenu from './fullMenu'
import MobileMenu from './mobileMenu'

export default function Navbar(){
  const [ isLargerThan494 ] = useMediaQuery(["(min-width: 494px)"]);

  return(
    <div className={styles.header}>
      <a href="/"  className={styles.logo}><Image src='/faraday-logo-new-inverted.png' alt='logo' width={200} height={43}/></a>
      {isLargerThan494 ? <FullMenu /> : <MobileMenu />}
    </div>
  )
}

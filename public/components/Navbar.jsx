import Link from 'next/link'
import { Menu, Button, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup,
  MenuIcon, MenuCommand,  MenuDivider, } from "@chakra-ui/react"
import {HamburgerIcon} from '@chakra-ui/icons'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Navbar(){
  return(
    <div className={styles.header}>
      <a href="/"  className={styles.logo}><Image src='/faraday-logo-new-inverted.png' alt='logo' width={200} height={43}/></a>
      <div className={styles.right}>
        <a href='https://github.com/oslabs-beta/FaradayJS' target="_blank"  rel="noreferrer" className={styles.gh}><Image src='/GitHub-Mark-64px-inverted.png' width={30} height={30}/></a>
        <Menu >
          <MenuButton as={Button}  className={styles.hamburger}>
          <HamburgerIcon />
          </MenuButton>
          <MenuList>
            <MenuItem><Link href="/Guide">How to Use FaradayJS</Link></MenuItem>
            <MenuItem><Link href="/Download">Download FaradayJS</Link></MenuItem>
            <MenuItem><Link href="/Team">The Team</Link></MenuItem>
          </MenuList>
          <MenuDivider/>
        </Menu>
      </div>

    </div>
  )
}
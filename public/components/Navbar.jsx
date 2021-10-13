import Link from 'next/link'
import { Menu, Button, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup,
  MenuIcon, MenuCommand,  MenuDivider, } from "@chakra-ui/react"
import {HamburgerIcon} from '@chakra-ui/icons'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
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
  return(
    <div className={styles.header}>
      <a href="/"  className={styles.logo}><Image src='/faraday-logo-new-inverted.png' alt='logo' width={200} height={43}/></a>
      <div className={styles.right}>
        <a href='https://github.com/oslabs-beta/FaradayJS' target="_blank"  rel="noreferrer" className={styles.gh}><Image src='/GitHub-Mark-64px-inverted.png' width={30} height={30}/></a>
        <a href='https://github.com/oslabs-beta/FaradayJS/releases' target="_blank"  rel="noreferrer" className={styles.dl}><Image src='/download.png' width={100} height={29}/></a>
        <Menu >
          <MenuButton as={Button}  className={styles.hamburger}>
          <HamburgerIcon />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={handleGuideClick}>How to Use FaradayJS</MenuItem>
            <MenuItem onClick={handleTeamClick}>The Team</MenuItem>
          </MenuList>
          <MenuDivider/>
        </Menu>
      </div>

    </div>
  )
}

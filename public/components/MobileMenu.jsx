import Link from 'next/link'
import { Menu, Button, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup,
  MenuIcon, MenuCommand,  MenuDivider, Stack, useMediaQuery, Box } from "@chakra-ui/react"
import {HamburgerIcon} from '@chakra-ui/icons'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const MobileMenu = ({ handleGuideClick, handleTeamClick }) => {
    return(
        <div className={styles.mobileRight}>
            <a href='https://github.com/oslabs-beta/FaradayJS' target="_blank"  rel="noreferrer" className={styles.gh}><Image src='/GitHub-Mark-64px-inverted.png' width={30} height={30}/></a>
            <a href='https://github.com/oslabs-beta/FaradayJS/releases' target="_blank"  rel="noreferrer" className={styles.dl}><Image src='/download.png' width={100} height={30}/></a>
            <Menu>
                <MenuButton as={Button} className={styles.hamburger}>
                <HamburgerIcon />
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={handleGuideClick}>User Guide</MenuItem>
                    <MenuItem onClick={handleTeamClick}>The Team</MenuItem>
                </MenuList>
            </Menu>
        </div>
    );
}
export default MobileMenu;
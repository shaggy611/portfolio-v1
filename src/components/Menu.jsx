import { useContext } from 'react'
import MenuContext from '../context/MenuContext'
import styled from 'styled-components'
import { motion } from 'framer-motion'

function Menu() {
  const menuItems = [
    { name: 'Home', link: '/home' },
    { name: 'About', link: '/about' },
    { name: 'Experience', link: '/experience' },
    { name: 'Projects', link: '/projects' },
    { name: 'Contacts', link: '/contacts' },
  ]

  const { menuActive } = useContext(MenuContext)

  return (
    <MenuBlock
      menuActive={menuActive}
      animate={menuActive ? { x: [0, 100, 0, 30, 20, 10, 5, 0] } : ''}>
      <ul>
        {menuItems.map((item) => (
          <li key={item.name}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </MenuBlock>
  )
}

export default Menu

const MenuBlock = styled(motion.nav)`
  position: fixed;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: #df78615e;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(7px);
  display: ${(props) => (props.menuActive ? 'flex' : 'none')};

  ul li {
    list-style: none;
  }

  ul li a {
    font-size: 3.5rem;
    font-family: var(--font-family-second);
    color: var(--third-color);
    font-weight: 900;
    text-decoration: none;
  }
`

import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { IconContext } from 'react-icons'

import { GrHomeRounded } from 'react-icons/gr'
import { GrUser } from 'react-icons/gr'
import { GrMailOption } from 'react-icons/gr'
import { GrProjects } from 'react-icons/gr'

function MenuDock() {
  // const menuItems = [
  //   { name: 'Home', link: '.' },
  //   { name: 'About', link: '#about' },
  //   { name: 'Projects', link: '#projects' },
  //   { name: 'Contacts', link: '#contacts' },
  // ]

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <StyledMenuDock>
      <IconContext.Provider value={{ color: 'var(--fire-orange-color)' }}>
        <NavLink to='.' onClick={scrollTop}>
          <GrHomeRounded />
        </NavLink>

        <NavLink to='about'>
          <GrUser />
        </NavLink>

        <NavLink to='projects'>
          <GrProjects />
        </NavLink>

        <NavLink to='contacts'>
          <GrMailOption />
        </NavLink>
      </IconContext.Provider>
    </StyledMenuDock>
  )
}

export default MenuDock

const StyledMenuDock = styled.nav`
  /* width: 15rem;
  height: 3rem; */
  border: 2px solid var(--fire-orange-color);
  border-radius: 10px;
  color: var(--fire-orange-color) !important;

  height: min-content;
  width: min-content;

  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 12px;
  justify-content: center;
  overflow: visible;
  padding: 8px 30px 2px 30px;

  bottom: 12px;
  left: 50%;
  position: fixed;
  transform: translateX(-50%);
  z-index: 2;

  font-size: 1.3rem;

  svg path {
    stroke: var(--fire-orange-color);
  }
`

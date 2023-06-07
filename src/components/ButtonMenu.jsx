import { useContext } from 'react'
import MenuContext from '../context/MenuContext'
import styled from 'styled-components'

function ButtonMenu() {
  const { menuActive, setMenuActive } = useContext(MenuContext)

  return (
    <HamburgerButton>
      <input
        id='toggle'
        type='checkbox'
        onClick={() => setMenuActive(!menuActive)}></input>

      <label htmlFor='toggle' className='hamburger'>
        <div className='top-bun'></div>
        <div className='meat'></div>
        <div className='bottom-bun'></div>
      </label>
    </HamburgerButton>
  )
}

export default ButtonMenu

const HamburgerButton = styled.div`
  #toggle {
    display: none;
  }

  /**
  Hamburger
**/
  .hamburger {
    position: absolute;
    top: 5em;
    right: 5%;
    margin-left: -2em;
    margin-top: -45px;
    width: 2em;
    height: 45px;
    z-index: 5;
  }

  .hamburger div {
    position: relative;
    width: 3em;
    height: 7px;
    border-radius: 3px;
    background-color: var(--fire-orange-color);
    margin-top: 8px;
    transition: all 0.3s ease-in-out;
  }

  /**
Animations
**/
  #toggle:checked + .hamburger .top-bun {
    transform: rotate(-45deg);
    margin-top: 25px;
  }
  #toggle:checked + .hamburger .bottom-bun {
    opacity: 0;
    transform: rotate(45deg);
  }
  #toggle:checked + .hamburger .meat {
    transform: rotate(45deg);
    margin-top: -7px;
  }

  #toggle:checked + .hamburger + .nav {
    top: 0;
    transform: scale(1);
  }
`

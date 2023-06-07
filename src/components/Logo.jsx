import styled from 'styled-components'
import logo from '../assets/menu_logo.png'
import { motion } from 'framer-motion'

function Logo() {
  return (
    <StyledLogo>
      <motion.img
        src={logo}
        alt='Logo'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      />
    </StyledLogo>
  )
}

export default Logo

const StyledLogo = styled.div`
  position: absolute;
  top: 3em;
  left: 50%;
  transform: translateX(-50%);
  /* margin-left: -2em; */
  margin-top: -45px;
  z-index: 5;

  img:hover {
    box-shadow: 0 1px 15px var(--fire-orange-color);
    cursor: pointer;
  }

  img {
    width: 3.5rem;
    height: 3.5rem;
    transition: box-shadow 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    border-radius: 50%;
  }
`

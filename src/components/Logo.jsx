import styled from 'styled-components'
import logo from '../assets/logo-outline.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to='.'>
      <StyledLogo>
        <motion.img
          src={logo}
          alt='Logo'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        />
      </StyledLogo>
    </Link>
  )
}

export default Logo

const StyledLogo = styled.div`
  /* position: absolute;
  top: 3em;
  left: 15%;
  transform: translateX(-50%);
  margin-top: -45px;
  z-index: 5; */

  img:hover {
    box-shadow: 0 1px 15px var(--fire-orange-color);
  }

  img {
    width: 3rem;
    height: 3rem;
    transition: box-shadow 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    border-radius: 50%;
  }

  @media(max-width: 767px) {
    img {
    width: 2rem;
    height: 2rem;
  }
  }
`

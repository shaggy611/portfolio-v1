import styled from 'styled-components'
import logo from '../assets/menu_logo.png'

function Logo() {
  return (
    <StyledLogo>
      <img src={logo} alt='Logo' />
    </StyledLogo>
  )
}

export default Logo

const StyledLogo = styled.div`
  position: absolute;
  top: 3em;
  left: 5%;
  margin-left: -2em;
  margin-top: -45px;
  z-index: 5;
  cursor: pointer;

  img {
    width: 5rem;
    height: 5rem;
  }
`

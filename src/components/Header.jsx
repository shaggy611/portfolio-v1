import styled from 'styled-components'
import Logo from './Logo'
import ContactsDeck from './ContactsDeck'

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <ContactsDeck />
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  margin: 0px auto;
  width: 100%;
  min-height: 5%;
  padding: 2rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    padding: 1rem 1rem;
  }
`

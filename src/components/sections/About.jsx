import { useContext } from 'react'
import PortfolioContext from '../../context/PortfolioContext'
import styled from 'styled-components'
import { Container, FlexCentered } from './../../styles/styles'

function About() {
  const { aboutData } = useContext(PortfolioContext)
  return (
    <StyledAbout id='about'>
      <Container>
        <FlexCentered>
          <h2>About</h2>
          <p>{aboutData.info}</p>
        </FlexCentered>
      </Container>
    </StyledAbout>
  )
}

export default About

const StyledAbout = styled.section`
  background-color: var(--additional-color);

  h2 {
    font-size: 2.5rem;
    font-family: var(--font-family-second);
    color: var(--ocean-wave-color);
    font-weight: 600;
  }

  p {
    margin-top: 1rem;
    font-size: 1.6rem;
    color: var(--fire-orange-color);
  }
`

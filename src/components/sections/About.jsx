import { useContext } from 'react'
import PortfolioContext from '../../context/PortfolioContext'
import styled from 'styled-components'
import { Container, mixins } from './../../styles/styles'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

function About() {
  const { aboutData } = useContext(PortfolioContext)
  return (
    <StyledAbout id='about'>
      <StyledContainer>
        <h2>
          <FaAngleLeft />
          About
          <FaAngleRight />
        </h2>

        <p>{aboutData.info}</p>
      </StyledContainer>
    </StyledAbout>
  )
}

export default About

const StyledContainer = styled(Container)`
  ${mixins.flexCentered}
`

const StyledAbout = styled.section`
  /* background-color: var(--additional-color); */

  h2 {
    font-size: 2.5rem;
    font-family: var(--font-family-second);
    color: var(--ocean-wave-color);
    font-weight: 600;

    svg {
      font-size: 2rem;
    }
  }

  p {
    margin-top: 1rem;
    font-size: 1.6rem;
    color: var(--fire-orange-color);
  }
`

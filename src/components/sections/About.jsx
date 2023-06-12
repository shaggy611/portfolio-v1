import { useContext } from 'react'
import PortfolioContext from '../../context/PortfolioContext'
import styled from 'styled-components'
import { Container, mixins } from './../../styles/styles'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import SkillsList from '../SkillsList'
import Jobs from '../Jobs'

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

        <p className='aboutText'>{aboutData.info}</p>
        <SkillsList skills={aboutData.skills} />
        <Jobs jobs={aboutData.jobs} />
      </StyledContainer>
    </StyledAbout>
  )
}

export default About

const StyledContainer = styled(Container)`
  ${mixins.flexCentered}
  max-width: 80%;
  padding-bottom: 6rem;
`

const StyledAbout = styled.section`
  /* background-color: var(--additional-color); */

  h2 {
    font-size: 2.2rem;
    font-family: var(--font-family-second);
    color: var(--ocean-wave-color);
    font-weight: 600;

    svg {
      font-size: 2rem;
    }
  }

  & .aboutText {
    margin-top: 1rem;
    font-size: 1rem;
    /* color: var(--fire-orange-color); */
  }
`

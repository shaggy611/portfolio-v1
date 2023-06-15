import { useContext } from 'react'
import PortfolioContext from '../../context/PortfolioContext'
import styled from 'styled-components'
import { Container, mixins } from './../../styles/styles'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import SkillsList from '../SkillsList'
import Jobs from '../Jobs'
import person from '../../assets/person.svg'
import PersonPhotoVector from '../PersonPhotoVector'

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
        <ImageSection>
          <div>
            <p className='aboutText'>{aboutData.info}</p>
            <SkillsList skills={aboutData.skills} />
          </div>

          <div className='photosContainer'>
            <img src={person} alt='Person Photo' />
            <PersonPhotoVector />
          </div>
        </ImageSection>
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
    font-family: var(--font-family);
    color: var(--ocean-wave-color);
    font-weight: 600;
    margin-bottom: 3%;
    margin-top: 7%;

    svg {
      font-size: 2rem;
    }
  }

  & .aboutText {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 300;
    /* color: var(--fire-orange-color); */
  }
`

const ImageSection = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;

  & svg path {
    stroke: #9c4835;
  }

  & svg {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: all 0.7s;
    opacity: 1;
    top: 0;
  }

  & img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    transition: all 0.5s;
  }

  & .photosContainer {
    width: 100%;
    height: 100%;
    position: relative;
  }

  & .photosContainer:hover {
    & img {
      opacity: 1;
    }

    & svg {
      opacity: 0;
    }
  }
`

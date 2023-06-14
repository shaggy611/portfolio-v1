import { useContext } from 'react'
import PortfolioContext from '../../context/PortfolioContext'
import { Container, mixins } from './../../styles/styles'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import styled from 'styled-components'
import { AiFillGithub } from 'react-icons/ai'
import { RxExternalLink } from 'react-icons/rx'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

function Projects() {
  const { projectsData } = useContext(PortfolioContext)
  return (
    <StyledProjects id='projects'>
      <StyledContainer>
        <h2>
          <FaAngleLeft />
          Projects
          <FaAngleRight />
        </h2>

        <ProjectsWrapper>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}>
            <Masonry gutter={'3%'}>
              {projectsData.map((project) => {
                return (
                  <Project key={project.projectName}>
                    <img src={project.projectImg} alt='Project Cover' />
                    <div className='project-text-area'>
                      <p className='project-name'>{project.projectName}</p>
                      <p className='project-description'>
                        {project.projectDescription}
                      </p>
                      <div className='psoject-technologies'>
                        {project.usedTechnologies.map((item) => (
                          <div key={`${project.projectName}${item}`}>
                            {item}
                          </div>
                        ))}
                      </div>
                      <div className='projects-links'>
                        <a href={project.repoLink}>
                          <AiFillGithub />
                        </a>
                        <a href={project.demoLink}>
                          <RxExternalLink />
                        </a>
                      </div>
                    </div>
                  </Project>
                )
              })}
            </Masonry>
          </ResponsiveMasonry>
        </ProjectsWrapper>
      </StyledContainer>
    </StyledProjects>
  )
}

export default Projects

const StyledContainer = styled(Container)`
  ${mixins.flexCentered}
  max-width: 80%;
  padding-bottom: 6rem;
`

const StyledProjects = styled.section`
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
`

const ProjectsWrapper = styled.div`
  /* display: grid;
  grid-template-columns: 50% 50%; */
  /* grid-gap: 2% 2%;

  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(4, 3fr);
  grid-auto-flow: row; */
`

const Project = styled.div`
  /* display: grid;
  grid-template-columns: 30% 70%; */
  background-color: rgba(30, 41, 59, 0.5);
  margin-bottom: 2rem;
  border-radius: 20px;
  height: fit-content;
  width: 100%;

  & img {
    display: block;
    width: 100%;
    /* height: 100%; */
    /* border-radius: 20px 0 0 20px; */
    border-radius: 20px 20px 0 0;
  }

  & .project-text-area {
    padding: 0.5rem 1rem;
    position: relative;
  }

  & .project-name {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 1.2rem;
  }

  & .project-description {
    margin-bottom: 1rem;
  }

  & .psoject-technologies {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }

  & .psoject-technologies div {
    padding: 5px 14px;
    border-radius: 20px;
    background-color: rgba(236, 179, 144, 0.435);
    margin-right: 7px;
    margin-bottom: 7px;
  }
  & .projects-links {
    position: absolute;
    top: 4%;
    right: 3%;
  }
`

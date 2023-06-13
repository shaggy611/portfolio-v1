import { useContext } from 'react'
import PortfolioContext from '../../context/PortfolioContext'
import { Container, mixins } from './../../styles/styles'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import styled from 'styled-components'
import { AiFillGithub } from 'react-icons/ai'
import { RxExternalLink } from 'react-icons/rx'

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
          {projectsData.map((project) => {
            return (
              <Project key={project.projectName}>
                <img src={project.projectImg} alt='Project Cover' />
                <div>
                  <span className='project-name'>{project.projectName}</span>
                  <span className='project-description'>
                    {project.projectDescription}
                  </span>
                  <div className='psoject-technologies'>
                    {project.usedTechnologies.map((item) => (
                      <div key={`${project.projectName}${item}`}>{item}</div>
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
    font-family: var(--font-family-second);
    color: var(--ocean-wave-color);
    font-weight: 600;

    svg {
      font-size: 2rem;
    }
  }
`

const ProjectsWrapper = styled.div`
  display: flex;
  flex
`

const Project = styled.div``

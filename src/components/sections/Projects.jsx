import { useContext } from 'react'
import PortfolioContext from '../../context/PortfolioContext'
import { Container, mixins } from './../../styles/styles'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import styled from 'styled-components'
import { AiFillGithub } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import { RxNotionLogo } from 'react-icons/rx'
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
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 1, 1200: 2 }}>
            <Masonry gutter={'3%'}>
              {projectsData.map((project) => {
                return (
                  <Project key={project.projectName}>
                    <div className='fakeTopPanel'>
                      <span />
                      <span />
                      <span />
                    </div>
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
                      <div className='projects-additional-info'>
                        {project.repoServerLink &&
                        project.notionDataBaseLink ? (
                          <div className='projects-additional-link'>
                            <a
                              href={project.repoServerLink}
                              target='_blank'
                              rel='noreferrer'>
                              <AiFillGithub /> Server Code Repo
                            </a>
                            <a
                              href={project.notionDataBaseLink}
                              target='_blank'
                              rel='noreferrer'>
                              <RxNotionLogo /> Notion Database
                            </a>
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                      <div className='projects-links'>
                        <a
                          href={project.repoLink}
                          target='_blank'
                          rel='noreferrer'>
                          <AiFillGithub />
                        </a>
                        <a
                          href={project.demoLink}
                          target='_blank'
                          rel='noreferrer'>
                          <BiLinkExternal />
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

  @media (max-width: 767px) {
    max-width: 100%;
    padding-bottom: 6rem;
  }
`

const StyledProjects = styled.section`
  & h2 {
    font-size: 2.2rem;
    font-family: var(--font-family);
    color: var(--ocean-wave-color);
    font-weight: 600;
    margin-bottom: 3%;
    margin-top: 7%;

    & svg {
      font-size: 2rem;
    }
  }

  @media (max-width: 767px) {
    & h2 {
      font-size: 1.7rem;
      margin-bottom: 20%;

      & svg {
        font-size: 1.4rem;
      }
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
  border: 2px solid var(--bottle-color);
  background-color: rgba(30, 41, 59, 0.1);
  margin-bottom: 2rem;
  /* border-radius: 20px; */
  height: fit-content;
  width: 100%;
  position: relative;
  transition: all 0.5s ease-out 0s;
  border-radius: 10px;

  &:hover {
    transform: rotate(1deg);
  }

  & .fakeTopPanel {
    position: absolute;
    top: 0;
    width: 100%;
    height: 30px;
    background-color: var(--bottle-color);
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    padding-left: 15px;
    padding-bottom: 3px;
    border-radius: 10px 10px 0 0;
  }

  & .fakeTopPanel span,
  & .fakeTopPanel span:first-child,
  & .fakeTopPanel span:last-child {
    content: '';
    display: block;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    margin: 0 5px;
  }

  & .fakeTopPanel span {
    background-color: #eab308;
  }

  & .fakeTopPanel span:first-child {
    background-color: #ef4444;
  }

  & .fakeTopPanel span:last-child {
    background-color: #22c55e;
  }

  & img {
    display: block;
    width: 100%;
    margin-top: 30px;
    /* height: 100%; */
    /* border-radius: 20px 0 0 20px; */
    /* border-radius: 20px 20px 0 0; */
  }

  & .project-text-area {
    padding: 2rem 1rem 0.5rem 1rem;
    position: relative;
  }

  & .project-name {
    /* margin-top: 1.5rem; */
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 1.2rem;
  }

  & .project-description {
    margin-bottom: 1.3rem;
    font-weight: 300;
  }

  & .psoject-technologies {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    font-size: 0.8rem;
    font-weight: 300;
  }

  & .psoject-technologies div {
    padding: 5px 14px 3px 14px;
    border-radius: 20px;
    background-color: var(--fire-orange-color);
    margin-right: 7px;
    margin-bottom: 7px;
  }

  & .projects-links {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 1.5rem;
    max-width: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  & .projects-links svg {
    fill: var(--fire-orange-color);
    cursor: pointer;
  }

  & .projects-additional-link {
    display: flex;
    flex-wrap: wrap;
  }

  & .projects-additional-link a {
    margin-bottom: 0.5rem;
    cursor: pointer;
    /* text-decoration: none; */
    color: var(--bottle-color);
    display: flex;
    align-items: baseline;
    width: 100%;
  }

  & .projects-additional-link a svg {
    margin-right: 0.5rem;
  }

  @media (max-width: 767px) {
  }
`

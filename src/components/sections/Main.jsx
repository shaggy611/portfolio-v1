import { useContext } from 'react'
import styled from 'styled-components'
import PortfolioContext from '../../context/PortfolioContext'
import { Container } from '../../styles/styles'
import notebook from '../../assets/notebook.png'

function Main() {
  const { hero } = useContext(PortfolioContext)
  return (
    <Container>
      <StyledWrapper>
        <div>
          <h1>
            {hero.greeting} <span>{hero.name}</span>
          </h1>
          <p>
            {hero.shortWelcomeText_1}
            <span> {hero.position}</span> {hero.shortWelcomeText_2}
          </p>
        </div>
        <div>
          <img src={notebook} alt='' />
        </div>
      </StyledWrapper>
    </Container>
  )
}

export default Main

const StyledWrapper = styled.section`
  display: flex;
  /* flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: row;
  align-content: center; */
  align-items: center;
  height: 100vh;

  h1 {
    font-size: 1.5rem;
    color: var(--main-color);
    font-weight: 500;
  }

  h1 span {
    font-size: 3rem;
    font-family: var(--font-family-second);
    color: var(--third-color);
    font-weight: 600;
  }

  p {
    margin-top: 1rem;
    font-size: 1.6rem;
    color: var(--main-color);
    font-weight: 600;
  }

  p span {
    font-size: 2.5rem;
    font-family: var(--font-family-second);
    color: var(--third-color);
    font-weight: 600;
  }

  img {
    max-width: 800px;
    width: 100%;
  }
`

import { useContext } from 'react'
import styled from 'styled-components'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import PortfolioContext from '../../context/PortfolioContext'
import { Container, mixins } from '../../styles/styles'
// import notebook from '../../assets/notebook.png'

function Main() {
  const hero = useContext(PortfolioContext)
  const { heroMainData } = hero

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  return (
    <StyledWrapper>
      <StyledContainer>
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100 }}
          drag
          dragElastic={0.14}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: 'grabbing' }}>
          <h1>
            {heroMainData.greeting} <span>{heroMainData.name}</span>
          </h1>
          <p>
            {heroMainData.shortWelcomeText_1}
            <span> {heroMainData.position}</span>{' '}
            {heroMainData.shortWelcomeText_2}
          </p>
        </motion.div>
        {/* <div>
          <img src={notebook} alt='' />
        </div> */}
      </StyledContainer>
    </StyledWrapper>
  )
}

export default Main

const StyledContainer = styled(Container)`
  ${mixins.flexCentered}
`

const StyledWrapper = styled.section`
  h1 {
    font-size: 1.5rem;
    color: var(--fire-orange-color);
    font-weight: 500;
  }

  h1 span {
    font-size: 3rem;
    font-family: var(--font-family-second);
    color: var(--ocean-wave-color);
    font-weight: 600;
  }

  p {
    margin-top: 1rem;
    font-size: 1.6rem;
    color: var(--fire-orange-color);
    font-weight: 600;
  }

  p span {
    font-size: 2.5rem;
    font-family: var(--font-family-second);
    color: var(--ocean-wave-color);
    font-weight: 600;
  }

  img {
    max-width: 800px;
    width: 100%;
  }
`

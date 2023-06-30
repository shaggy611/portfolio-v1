import { useContext } from 'react'
import styled from 'styled-components'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import PortfolioContext from '../../context/PortfolioContext'
import { Container, mixins } from '../../styles/styles'

function Main() {
  const hero = useContext(PortfolioContext)
  const { heroMainData, coverImgMainScreen } = hero

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  return (
    <StyledWrapper>
      <StyledContainer>
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100 }}
          drag
          dragElastic={0.14}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: 'grabbing' }}>
          <h1 className='line-before'>
            {heroMainData.greeting} <span>{heroMainData.name}</span>
          </h1>
          <p className='line-after'>
            {heroMainData.shortWelcomeText_1}
            <span> {heroMainData.position}</span>{' '}
            {heroMainData.shortWelcomeText_2}
          </p>
          <p className='line-before'>{heroMainData.shortWelcomeText_3}</p>
        </motion.div>
        <div>
          <img src={coverImgMainScreen} alt='Cover' />
        </div>
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
    font-size: 1rem;
    color: var(--fire-orange-color);
    /* font-weight: 500; */
    display: flex;
    align-items: baseline;
    background-color: var(--bottle-color);
    padding: 4px 17px;
    border-radius: 5px;
    width: fit-content;
    filter: drop-shadow(8px 4px 5px black);
  }

  h1 span {
    font-family: var(--font-family);
    color: var(--fire-orange-color);
    font-weight: 900;
    font-size: 1.5rem;
    margin-left: 5px;
  }

  p {
    margin-top: 1rem;
    /* font-size: 1.2rem; */
    color: var(--fire-orange-color);
    /* font-weight: 600; */
    display: flex;
    align-items: baseline;
    flex-wrap: nowrap;
    background-color: var(--bottle-color);
    padding: 4px 17px;
    border-radius: 5px;
    width: fit-content;
    filter: drop-shadow(8px 4px 5px black);
  }

  p span {
    font-family: var(--font-family);
    color: var(--fire-orange-color);
    font-weight: 900;
    font-size: 1.5rem;
    margin: 0 5px;
  }

  img {
    max-width: 68%;
    border-radius: 7px;
    box-shadow: 20px 40px 20px #0000005a;
    position: fixed;
    top: 20%;
    left: 26%;
    z-index: -101;
    filter: blur(5px);
  }

  .line-before::before {
    content: '';
    display: block;
    position: relative;
    width: 80px;
    height: 2px;
    margin-bottom: 5px;
    background-color: var(--fire-orange-color);
    align-self: center;
    margin-right: 20px;
  }

  .line-after::after {
    content: '';
    display: block;
    position: relative;
    width: 80px;
    height: 2px;
    margin-bottom: 5px;
    background-color: var(--fire-orange-color);
    align-self: center;
    margin-left: 20px;
  }

  @media (max-width: 767px) {
    margin-top: 3rem;
    line-height: 1.5rem;

    .line-after::after,
    .line-before::before {
      display: none;
    }

    h1 span {
      font-family: var(--font-family);
      color: var(--fire-orange-color);
      font-weight: 900;
      font-size: 1.3rem;
      margin-left: 5px;
    }

    p {
      margin-top: 1.5rem;
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
      padding: 15px 17px;
    }

    p span {
      font-weight: 900;
      font-size: 1.3rem;
      margin: 0;
    }
  }
`

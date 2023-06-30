import { useContext } from 'react'
import styled from 'styled-components'
import PortfolioContext from '../context/PortfolioContext'

function Copyright() {
  const { copyright } = useContext(PortfolioContext)
  return (
    <StyledCopyright>
      <small>{copyright}</small>
    </StyledCopyright>
  )
}

export default Copyright

const StyledCopyright = styled.div`
  position: fixed;
  bottom: 7.3rem;
  left: -7.5rem;
  transform: rotate(-90deg);

  & small {
    text-decoration: none;
    color: var(--bottle-color);
    font-weight: 300;
    font-size: 0.8rem;
  }

  & small:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    margin-right: 15px;
    height: 1px;
    width: 100px;
    background: var(--bottle-color);
  }

  @media (max-width: 767px) {
    bottom: 5.4rem;
    left: -9.4rem;
  }
`

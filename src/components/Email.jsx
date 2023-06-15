import { useContext } from 'react'
import styled from 'styled-components'
import PortfolioContext from '../context/PortfolioContext'
import { Link } from 'react-router-dom'

function Email() {
  const { contactsData } = useContext(PortfolioContext)
  return (
    <StyledEmail>
      <Link
        to={`mailto:${contactsData.email}`}
        target='_blank'
        rel='noopener noreferrer'>
        {contactsData.email}
      </Link>
    </StyledEmail>
  )
}

export default Email

const StyledEmail = styled.div`
  position: fixed;
  bottom: 6rem;
  right: -6.5rem;
  transform: rotate(90deg);

  & a {
    text-decoration: none;
    color: var(--bottle-color);
    font-weight: 300;
    font-size: 0.8rem;
  }

  & a:after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    margin-left: 15px;
    height: 1px;
    width: 100px;
    background: var(--bottle-color);
  }
`

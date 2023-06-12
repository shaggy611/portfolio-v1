import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useContext } from 'react'
import { TbBrandTelegram } from 'react-icons/tb'
import { FiMail } from 'react-icons/fi'
import { ImCodepen } from 'react-icons/im'
import { SlSocialLinkedin } from 'react-icons/sl'
import { FiGithub } from 'react-icons/fi'
import PortfolioContext from '../context/PortfolioContext'

function ContactsDeck() {
  const { contactsData } = useContext(PortfolioContext)

  return (
    <StyledContactsDeck>
      <nav>
        <ul>
          <li>
            <Link to={`mailto:${contactsData.email}`}>
              <FiMail />
            </Link>
          </li>
          <li>
            <Link to={contactsData.telegram}>
              <TbBrandTelegram />
            </Link>
          </li>
          <li>
            <Link to={contactsData.linkedin}>
              <SlSocialLinkedin />
            </Link>
          </li>
          <li>
            <Link to={contactsData.github}>
              <FiGithub />
            </Link>
          </li>
          <li>
            <Link to={contactsData.codepen}>
              <ImCodepen />
            </Link>
          </li>
        </ul>
      </nav>
    </StyledContactsDeck>
  )
}

export default ContactsDeck

const StyledContactsDeck = styled.div`
  max-width: 200px;
  width: 100%;
  min-height: 50px;
  /* position: absolute;
  top: 4em;
  right: 0%;
  transform: translateX(-50%);
  margin-top: -45px;
  z-index: 5; */
  & svg:hover {
    transform: scale(1.2);
    transition: transform 0.3s;
  }

  svg {
    transition: transform 0.3s;
  }

  & ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: space-between;
    font-size: 1.3rem;

    & svg {
      stroke: var(--fire-orange-color);
      color: var(--fire-orange-color);
    }
  }
`

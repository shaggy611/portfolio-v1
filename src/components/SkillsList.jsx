import styled from 'styled-components'
import PropTypes from 'prop-types'

function SkillsList({ skills }) {
  return (
    <StyledSkillsList>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
    </StyledSkillsList>
  )
}

SkillsList.propTypes = {
  skills: PropTypes.array,
}

export default SkillsList

const StyledSkillsList = styled.div`
  margin-top: 3rem;
  max-width: 85%;

  ul {
    list-style: none;
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 10px;
    grid-column-gap: 10px; */
    display: flex;
    flex-wrap: wrap;
  }

  ul li {
    border-radius: 20px;
    background-color: var(--fire-orange-color);
    padding: 7px 18px 4px 18px;
    margin: 8px;
    font-weight: 500;
    font-size: 0.8rem;
  }
`

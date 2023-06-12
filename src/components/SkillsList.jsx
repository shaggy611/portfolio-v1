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
  margin-top: 1.3rem;

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 10px;
  }
`

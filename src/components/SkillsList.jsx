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
    background-color: #ecb3906f;
    padding: 7px 15px 7px 15px;
    margin: 8px;
  }
`

import styled from 'styled-components'
import PropTypes from 'prop-types'

function Jobs({ jobs }) {
  return (
    <StyledJobsWrapper>
      {jobs.map((item) => {
        return (
          <JobsItemWrapper key={item.timePeriod}>
            <div className='time-period'>
              <p>{item.timePeriod}</p>
            </div>
            <div className='info'>
              <p>
                {item.position}{' '}
                <span className='company'>@ {item.company}</span>
              </p>
              <ul>
                {item.responsibilities.map((res) => (
                  <li key={res}>{res}</li>
                ))}
              </ul>
            </div>
          </JobsItemWrapper>
        )
      })}
    </StyledJobsWrapper>
  )
}

Jobs.propTypes = {
  jobs: PropTypes.array,
}

export default Jobs

const StyledJobsWrapper = styled.div`
  margin-top: 3rem;

  & .time-period {
    font-size: 0.8rem;
    font-style: italic;
    margin-right: 2rem;
    color: var(--fire-orange-color);
    text-align: center;
  }

  & .company {
    color: var(--fire-orange-color);
    font-weight: 600;
  }

  & .info {
    font-weight: 500;
  }

  & .info ul {
    margin-top: 1.5rem;
    list-style: none;
    position: relative;
  }

  & .info ul li {
    margin-bottom: 0.8rem;
    font-size: 0.8rem;
    font-weight: 300;
  }

  & .info ul li::before {
    content: '▹';
    position: absolute;
    left: -30px;
    color: var(--bottle-color);
  }

  & .info ul::before {
    content: '';
    display: block;
    position: relative;
    top: -5px;
    width: 300px;
    height: 1px;
    margin-bottom: 5px;
    background-color: var(--fire-orange-color);
  }

  & .time-period::after {
    content: '';
    display: block;
    position: relative;
    top: 10px;
    left: 50%;
    width: 1px;
    height: 100%;
    margin-bottom: 5px;
    background-color: var(--bottle-color);
  }

  @media (max-width: 991px) {
    & .info ul::before {
      width: 100%;
    }

    & .time-period {
      font-size: 0.7rem;
      margin-right: 1.6rem;
      text-align: left;
    }

    & .info ul li {
      margin-bottom: 0.8rem;
      font-size: 0.7rem;
      font-weight: 300;
    }

    & .info ul li::before {
      left: -20px;
    }

    & .time-period::after {
      top: 10px;
      left: 50%;
      margin-bottom: 5px;
      height: calc(100% - 75px);
    }

    & .info p {
      font-size: 0.9rem;
    }
  }
`
const JobsItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  margin-top: 5%;

  @media (max-width: 767px) {
    grid-template-columns: 1fr 7fr;
  }
`

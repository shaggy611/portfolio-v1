import styled, { keyframes, css } from 'styled-components'

function Loader(props) {
  return (
    <StyledLoader loaded={props.loaded}>
      <div id='loader-wrapper'>
        <div id='loader'></div>

        <div className='loader-section section-left'></div>
        <div className='loader-section section-right'></div>
      </div>
    </StyledLoader>
  )
}

export default Loader

const spin = keyframes` 
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`

const spinReverse = keyframes`
  0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  `

const StyledLoader = styled.div`
  #loader-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    overflow: hidden;

    ${(props) => {
      if (props.loaded) {
        return css`
          visibility: hidden;
          transform: translateY(-100%);
          transition: all 0.3s 1s ease-out;
        `
      }
    }}
  }

  #loader {
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #16a085;
    animation: ${spin} 1.7s linear infinite;
    z-index: 11;

    ${(props) => {
      if (props.loaded) {
        return css`
          opacity: 0;
          transition: all 0.3s ease-out;
        `
      }
    }}

    &:before {
      content: '';
      position: absolute;
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-top-color: #e74c3c;
      animation: ${spinReverse} 0.6s linear infinite;
    }

    &:after {
      content: '';
      position: absolute;
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-top-color: #f9c922;
      animation: ${spin} 1s linear infinite;
    }
  }

  #loader-wrapper .loader-section {
    position: fixed;
    top: 0;
    width: 51%;
    height: 100%;
    background: #222;
    z-index: 10;
  }

  #loader-wrapper .loader-section.section-left {
    left: 0;
  }

  #loader-wrapper .loader-section.section-right {
    right: 0;
  }

  /* Loaded styles */

  .loaded #loader-wrapper .loader-section.section-left {
    transform: translateX(-100%);
    transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .loaded #loader-wrapper .loader-section.section-right {
    transform: translateX(100%);
    transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  /* .loaded #loader {
    opacity: 0;
    transition: all 0.3s ease-out;
  }

  .loaded #loader-wrapper {
    visibility: hidden;
    transform: translateY(-100%);
    transition: all 0.3s 1s ease-out;
  } */
`

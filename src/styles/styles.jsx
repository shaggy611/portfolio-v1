import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin: 0px auto;
  width: 100%;
  max-width: 1400px;
  min-height: 60vh;
  padding: 0px 5rem;

  @media (max-width: 767px) {
    padding: 0px 2rem;
  }
`
export const FlexCentered = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 100vh;
`

export const mixins = {
  flexCentered: css`
    display: flex;
    /* -webkit-box-align: center;
    align-items: center; */
    flex-direction: column;
    justify-content: center;
  `,
}

import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d4d4d4;
`

export const LogoImage = styled.img`
  margin-top: 1rem;
  margin-bottom: 3rem;
  width: 20rem;
`

export const CardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 2rem;
  overflow: hidden;
  padding: 1rem 0;
  margin-bottom: 1.4rem;
  margin-top: 2rem;
`

export const ButtonSection = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
`
export const SpinnerSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

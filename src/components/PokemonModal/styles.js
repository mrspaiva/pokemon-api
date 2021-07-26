import styled from 'styled-components'

export const ViewOverlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ViewContainer = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem;
  width: 40rem;
  height: 20rem;

  display: flex;
  justify-content: space-between;
`

export const InfoContent = styled.div``

export const Image = styled.img`
  width: 12rem;
  height: 12rem;
  display: flex;
  align-self: center;
`
export const Name = styled.h1`
  font-weight: 700;
  margin-bottom: 1.2rem;
`

export const InfoTitle = styled.h3``

export const InfoValue = styled.span``

export const CloseButton = styled.div`
  background-color: #fff;
  cursor: pointer;
  display: flex;
`

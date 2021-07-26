import styled from 'styled-components'

export const Container = styled.button`
  width: 10rem;
  height: 15rem;
  background-color: rgb(247, 247, 247);
  border-radius: 6px;
  border: none;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`

export const IdNumberContainer = styled.div`
  background-color: #d4d4d4;
  padding: 0.2rem 0.4rem;
  border-radius: 1rem;
`

export const IdNumber = styled.span``

export const Image = styled.img`
  width: 8rem;
  height: 8rem;
`

export const Name = styled.h3`
  font-weight: bold;
`

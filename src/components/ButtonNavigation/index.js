import React from 'react'

import { ButtonText, Container } from './styles'

function ButtonNavigation({ text, onClick }) {
  return (
    <Container onClick={onClick}>
      <ButtonText>{text}</ButtonText>
    </Container>
  )
}

export default ButtonNavigation

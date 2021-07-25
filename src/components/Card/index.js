import React from 'react'

import { Container, IdNumberContainer, IdNumber, Image, Name } from './styles'

function Card({ id, image, name }) {
  return (
    <Container>
      <IdNumberContainer>
        <IdNumber>#{id}</IdNumber>
      </IdNumberContainer>

      <Image src={image} alt={name} />

      <Name>{name}</Name>
    </Container>
  )
}

export default Card

import React from 'react'

import { Container, IdNumberContainer, IdNumber, Image, Name } from './styles'

function PokemonCard({ id, image, name, onClick }) {
  return (
    <Container onClick={onClick}>
      <IdNumberContainer>
        <IdNumber>#{id}</IdNumber>
      </IdNumberContainer>

      <Image src={image} alt={name} />

      <Name>{name}</Name>
    </Container>
  )
}

export default PokemonCard

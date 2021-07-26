import React from 'react'
import { FiX } from 'react-icons/fi'

import {
  ViewOverlay,
  ViewContainer,
  InfoContent,
  Image,
  Name,
  InfoTitle,
  InfoValue,
  CloseButton,
} from './styles'

function PokemonModal({ isOpen, image, name, type, onClickClose }) {
  if (!isOpen) {
    return null
  }

  return (
    <ViewOverlay>
      <ViewContainer>
        <Image src={image} />
        <InfoContent>
          <Name>{name}</Name>
          <InfoTitle>Type</InfoTitle>
          <InfoValue>{type}</InfoValue>
        </InfoContent>

        <CloseButton onClick={onClickClose}>
          <FiX size={24} color='#000' />
        </CloseButton>
      </ViewContainer>
    </ViewOverlay>
  )
}

export default PokemonModal

import React from 'react'
import { FiX } from 'react-icons/fi'

import {
  ViewOverlay,
  ViewContainer,
  PokemonPresentation,
  Image,
  Name,
  InfoSection,
  InfoContent,
  InfoTitle,
  InfoValue,
  CloseButton,
} from './styles'

function PokemonModal({
  isOpen,
  image,
  name,
  type,
  baseExperience,
  weight,
  height,
  ability,
  move,
  onClickClose,
}) {
  if (!isOpen) {
    return null
  }

  return (
    <ViewOverlay>
      <ViewContainer>
        <Image src={image} />
        <PokemonPresentation>
          <Name>{name}</Name>

          <InfoSection>
            <InfoContent>
              <InfoTitle>Type</InfoTitle>
              <InfoValue>{type}</InfoValue>
            </InfoContent>

            <InfoContent>
              <InfoTitle>Base experience</InfoTitle>
              <InfoValue>{baseExperience}</InfoValue>
            </InfoContent>

            <InfoContent>
              <InfoTitle>Weight</InfoTitle>
              <InfoValue>{weight}</InfoValue>
            </InfoContent>

            <InfoContent>
              <InfoTitle>Height</InfoTitle>
              <InfoValue>{height}</InfoValue>
            </InfoContent>

            <InfoContent>
              <InfoTitle>Ability</InfoTitle>
              <InfoValue>{ability}</InfoValue>
            </InfoContent>

            <InfoContent>
              <InfoTitle>Move</InfoTitle>
              <InfoValue>{move}</InfoValue>
            </InfoContent>
          </InfoSection>
        </PokemonPresentation>

        <CloseButton onClick={onClickClose}>
          <FiX size={24} color='#000' />
        </CloseButton>
      </ViewContainer>
    </ViewOverlay>
  )
}

export default PokemonModal

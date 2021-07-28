import React from 'react'

import { Container } from './styles'

function SearchBar({ onChange }) {
  return (
    <Container type='text' placeholder='Pesquisar...' onChange={onChange} />
  )
}

export default SearchBar

import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import Card from '../../components/PokemonCard'
import Modal from '../../components/PokemonModal'
import { Container, Title, CardSection } from './styles'

function Home() {
  const [pokemonData, setPokemonData] = useState([])
  const [viewPokemon, setViewPokemon] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get('/')

      function createPokemonObject(results) {
        results.forEach(async (pokemon) => {
          const { data } = await api.get(`/${pokemon.name}`)
          setPokemonData((currentList) => [...currentList, data])
        })
      }
      createPokemonObject(data.results)
    }

    fetchData()
  }, [])

  return (
    <Container>
      <Title>Pokedex</Title>

      <CardSection>
        {pokemonData.map((poke) => (
          <Card
            id={poke.id}
            image={poke.sprites.other.dream_world.front_default}
            name={poke.name}
            type={poke.types[0].type.name}
            onClick={() => setViewPokemon(poke)}
          />
        ))}
      </CardSection>

      {viewPokemon ? (
        <Modal
          isOpen={Boolean(viewPokemon)}
          onClickClose={() => setViewPokemon(null)}
          image={viewPokemon.sprites.other.dream_world.front_default}
          name={viewPokemon.name}
          type={viewPokemon.types[0].type.name}
        />
      ) : (
        <Modal
          isOpen={Boolean(viewPokemon)}
          onClickClose={() => setViewPokemon(null)}
        />
      )}
    </Container>
  )
}

export default Home

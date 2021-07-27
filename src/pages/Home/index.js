import React, { useEffect, useState } from 'react'
import Spinner from 'react-spinkit'
import Card from '../../components/PokemonCard'
import Modal from '../../components/PokemonModal'
import Button from '../../components/ButtonNavigation'
import { getAllPokemon, getPokemon } from '../../services/PokemonPromises'
import {
  Container,
  Title,
  CardSection,
  ButtonSection,
  SpinnerSection,
} from './styles'

function Home() {
  const [pokemonData, setPokemonData] = useState([])
  const [viewPokemon, setViewPokemon] = useState(null)
  const [loading, setLoading] = useState(true)
  const [nextUrl, setNextUrl] = useState('')
  const [prevUrl, setPrevUrl] = useState('')

  const initialURL = 'https://pokeapi.co/api/v2/pokemon'

  const loadPokemon = async (data) => {
    const pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        const pokemonRecord = await getPokemon(pokemon)
        return pokemonRecord
      })
    )
    setPokemonData(pokemonData)
  }

  useEffect(() => {
    setTimeout(() => {
      async function fetchData() {
        const data = await getAllPokemon(initialURL)
        setNextUrl(data.next)
        setPrevUrl(data.previous)
        await loadPokemon(data.results)
        setLoading(false)
      }
      fetchData()
    }, 3000)
  }, [])

  const next = async () => {
    setLoading(true)
    const data = await getAllPokemon(nextUrl)
    await loadPokemon(data.results)
    setNextUrl(data.next)
    setPrevUrl(data.previous)
    setLoading(false)
  }

  const prev = async () => {
    if (!prevUrl) return
    setLoading(true)
    const data = await getAllPokemon(prevUrl)
    await loadPokemon(data.results)
    setNextUrl(data.next)
    setPrevUrl(data.previous)
    setLoading(false)
  }

  function loadingReturn() {
    return (
      <SpinnerSection>
        <Spinner name='wandering-cubes' color='red' />
      </SpinnerSection>
    )
  }

  return (
    <Container>
      {loading ? (
        loadingReturn()
      ) : (
        <>
          <Title>Pokedex</Title>

          <CardSection>
            {pokemonData.map((poke) => (
              <Card
                key={poke.id}
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
              baseExperience={viewPokemon.base_experience}
              weight={viewPokemon.weight}
              height={viewPokemon.height}
              ability={viewPokemon.abilities[0].ability.name}
              move={viewPokemon.moves[0].move.name}
            />
          ) : (
            <Modal
              isOpen={Boolean(viewPokemon)}
              onClickClose={() => setViewPokemon(null)}
            />
          )}
          <ButtonSection>
            <Button text='Previous' onClick={prev} />
            <Button text='Next' onClick={next} />
          </ButtonSection>
        </>
      )}
    </Container>
  )
}

export default Home

import styles from "../styles/Home.module.scss"
import Card from "../components/Card"

export async function getStaticProps() {
  const maxPokemons = 250
  const api = "https://pokeapi.co/api/v2/pokemon/"

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url)
      const data = await res.json()
      return {
        id: data.id,
        name: data.name,
        imageUrl: data.sprites.front_default,
      }
    })
  )

  return {
    props: {
      pokemons: pokemonDetails,
    }
  }
}


export default function Home({ pokemons }) {
  
  return (
    <>
        <div className={styles.container}>
          <h1 className={styles.title}>Pokemons</h1>
        </div>

        <div className={styles.pokemon_container}>
          {
            pokemons.map((pokemon) => (
              <Card key={pokemon.id} pokemon={pokemon}/>
            ))
          }
        </div>
    </>

  )
}

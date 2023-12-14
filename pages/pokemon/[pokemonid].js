import Image from "next/image"
import styles from "../../styles/pokemon.module.scss"

export const getStaticPaths = async () => {
  const maxPokemons = 250
  const api = "https://pokeapi.co/api/v2/pokemon/"

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  const paths = data.results.map((pokemon,index) => ({
    params: { pokemonid: (index + 1).toString() }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.pokemonid

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await res.json()

  return {
    props: { pokemon: data }
  }
}

export default function Pokemon({ pokemon }) {
  return (
    <div className={styles.pokemon_card}>

      <p className={styles.title}>{pokemon.name}</p>
      <Image
        src={pokemon.sprites.front_default}
        width={70}
        height={70}
        alt={pokemon.name}
        className={styles.img}
      />
      <p>{`#${pokemon.id}`}</p>

      <div className={styles.type}>
      <p className={styles.type_title}>Type</p>
            <div className={styles.type_div}>
                {
                    pokemon.types.map((item,index) => (
                        <span 
                        key={index} 
                        className={`${styles.type} ${styles['type_' + item.type.name]}`}>
                            {item.type.name}
                        </span>
                    ))
                }
            </div>
      </div>

      <div className={styles.info}>
        <p>{`Height: ${pokemon.height * 10}cm`}</p>
        <p>{`Weight: ${pokemon.weight / 10}kg`}</p>
      </div>
      
    </div>
    

  )
}

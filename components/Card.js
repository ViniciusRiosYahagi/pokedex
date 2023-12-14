import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Card.module.scss"

export default function Card({pokemon}) {
    return (
        <>
            <div className={styles.card}>
                <Image 
                src={pokemon.imageUrl}
                width="70"
                height="70"
                alt={pokemon.name}
                />
                <p>{pokemon.name}</p>
                <Link href={`/pokemon/${pokemon.id}`}>
                    Detalhe
                </Link>
            </div>
        </>
    )
}
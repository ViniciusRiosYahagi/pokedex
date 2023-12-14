import Image from "next/image"
import styles from "../styles/About.module.scss"

export default function About() {
    return (
        <div className={styles.container}>
            <h1>About This Project</h1>
            <p>This project was created using Next.js by <a href="https://github.com/ViniciusRiosYahagi" target="_blank" rel="noreferrer">Vinicius Rios</a></p>
            <Image 
            src="/img/pikachu.png" 
            width={180} 
            height={300}
            alt="pikachu"
            priority={true}
            />
        </div>
    )
}
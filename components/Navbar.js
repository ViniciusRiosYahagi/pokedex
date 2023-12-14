import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Navbar.module.scss"


export default function Navbar() {

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image 
                src="/img/pokeboll.png"
                width="30" 
                height="30" 
                alt="pokeboll"
                />
              <Link href="/">  
                <h1>Poke<span>dex</span></h1>
              </Link>
            </div>

            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}
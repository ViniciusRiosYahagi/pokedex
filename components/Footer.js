import styles from "../styles/Footer.module.scss"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <h5>Copyright © 2023 developed by <a 
            href="https://github.com/ViniciusRiosYahagi" 
            target="_blank" 
            rel="noreferrer"
            >Vinicius Rios</a></h5>
        </footer>
    )
}
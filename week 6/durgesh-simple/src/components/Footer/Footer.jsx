import { useTheme } from '../../context/ThemeContext'
import styles from './Footer.module.css'

function Footer() {
  const { theme } = useTheme()
  return (
    <footer className={`${styles.footer} ${styles[theme]}`}>
      <p>© 2025 Durgesh Gowda H B — Mysore</p>
      <div className={styles.links}>
        <a href="https://github.com/DurgeshGowda-HB" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/durgeshgowda-hb" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  )
}

export default Footer

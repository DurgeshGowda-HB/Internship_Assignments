import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import styles from './Navbar.module.css'

function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <nav className={`${styles.nav} ${styles[theme]}`}>
      <div className={styles.inner}>

        <span className={styles.logo}>Durgesh Gowda</span>

        <ul className={`${styles.links} ${open ? styles.show : ''}`}>
          <li><NavLink to="/"          end className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about"         className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setOpen(false)}>About</NavLink></li>
          <li><NavLink to="/projects"      className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setOpen(false)}>Projects</NavLink></li>
          <li><NavLink to="/contact"       className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setOpen(false)}>Contact</NavLink></li>
          <li><NavLink to="/dashboard"     className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setOpen(false)}>Dashboard</NavLink></li>
        </ul>

        <div className={styles.right}>
          <button className={styles.themeBtn} onClick={toggleTheme}>
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
          <button className={styles.menuBtn} onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar

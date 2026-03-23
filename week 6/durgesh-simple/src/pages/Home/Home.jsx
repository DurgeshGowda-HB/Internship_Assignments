import { useTheme } from '../../context/ThemeContext'
import styles from './Home.module.css'

function Home() {
  const { theme } = useTheme()

  return (
    <div className={`${styles.page} ${styles[theme]}`}>

      {/* Hero section */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.hello}>Hi, I'm</p>
          <h1 className={styles.name}>Durgesh Gowda H B</h1>
          <h2 className={styles.role}>Full Stack Developer</h2>
          <p className={styles.bio}>
            I'm a final year B.E Computer Science student at MITM, Mysore (2026).
            I love building websites using HTML, CSS, JavaScript and React.
            I completed my internship at Infotise IT Solution.
          </p>
          <div className={styles.btnGroup}>
            <a href="/projects" className={styles.btn}>View Projects</a>
            <a href="/contact"  className={styles.btnOutline}>Contact Me</a>
            <a href="/resume.pdf" download className={styles.btnLink}>⬇ Download Resume</a>
          </div>
        </div>

        <div className={styles.heroImg}>
          <div className={styles.circle}>DG</div>
        </div>
      </section>

      {/* Skills section */}
      <section className={styles.skills}>
        <h3>Skills</h3>
        <div className={styles.skillList}>
          {['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'GitHub'].map(skill => (
            <span key={skill} className={styles.skill}>{skill}</span>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Home

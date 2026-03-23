import { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import withAnimation from '../../hoc/withAnimation'
import styles from './About.module.css'

const SKILLS = [
  { name: 'HTML',       level: 85 },
  { name: 'CSS',        level: 80 },
  { name: 'JavaScript', level: 75 },
  { name: 'React',      level: 60 },
  { name: 'Git',        level: 70 },
]

// This component shows skill bars
function Skills() {
  return (
    <div>
      {SKILLS.map(skill => (
        <div key={skill.name} className={styles.skillRow}>
          <div className={styles.skillLabel}>
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className={styles.bar}>
            <div className={styles.fill} style={{ width: skill.level + '%' }}></div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Wrapping Skills with HOC to add fade-in animation
const AnimatedSkills = withAnimation(Skills)

function About() {
  const { theme } = useTheme()
  const [tab, setTab] = useState('experience')

  return (
    <div className={`${styles.page} ${styles[theme]}`}>
      <div className={styles.container}>

        <h1 className={styles.title}>About Me</h1>

        {/* Bio */}
        <div className={styles.bio}>
          <p>
            Hi! I'm <strong>Durgesh Gowda H B</strong>, a final year B.E Computer Science
            student at MITM, Mysore (batch 2026). I'm passionate about web development
            and I enjoy building projects to improve my skills.
          </p>
          <p>
            I completed an internship at <strong>Infotise IT Solution</strong> where I worked
            on real projects. I'm always eager to learn new things and grow as a developer.
          </p>
          <div className={styles.info}>
            <span>📍 Mysore, Karnataka</span>
            <span>📧 example@gmail.com</span>
            <span>🎓 MITM, BE CSE 2026</span>
          </div>
        </div>

        {/* Skills with animation HOC */}
        <h2 className={styles.secTitle}>My Skills</h2>
        <AnimatedSkills />

        {/* Experience / Education Tabs */}
        <div className={styles.tabs}>
          <button
            className={tab === 'experience' ? styles.tabActive : styles.tab}
            onClick={() => setTab('experience')}
          >
            Experience
          </button>
          <button
            className={tab === 'education' ? styles.tabActive : styles.tab}
            onClick={() => setTab('education')}
          >
            Education
          </button>
        </div>

        {/* Show content based on active tab */}
        {tab === 'experience' && (
          <div className={styles.card}>
            <h3>Web Development Intern</h3>
            <p className={styles.sub}>Infotise IT Solution · 2024</p>
            <p>Worked on building web pages using HTML, CSS and JavaScript. Learned teamwork, Git, and how real projects are done.</p>
          </div>
        )}

        {tab === 'education' && (
          <div className={styles.card}>
            <h3>B.E Computer Science Engineering</h3>
            <p className={styles.sub}>MITM, Mysore (VTU) · 2022 – 2026</p>
            <p>Studying core CS subjects like Data Structures, DBMS, OS and Web Development. Final year student.</p>
          </div>
        )}

      </div>
    </div>
  )
}

export default About

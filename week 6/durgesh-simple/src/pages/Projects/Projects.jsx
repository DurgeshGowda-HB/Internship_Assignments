import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useTheme } from '../../context/ThemeContext'
import styles from './Projects.module.css'

const PROJECTS = [
  {
    id: 1,
    title: 'Expense Tracker',
    category: 'Frontend',
    emoji: '💰',
    desc: 'A web app to add and track income and expenses with live balance.',
    detail: 'Built with HTML, CSS and JavaScript. You can add income or expense, see the balance update live, and delete entries. My first JavaScript project!',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    title: 'Smart Agro Bot',
    category: 'Full Stack',
    emoji: '🌱',
    desc: 'A chatbot that gives farming tips and crop information to farmers.',
    detail: 'A simple chatbot web app for agriculture. Farmers can ask questions about crops and get basic advice. Made for college project.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 3,
    title: 'Airline Seat Reservation',
    category: 'Frontend',
    emoji: '✈️',
    desc: 'A seat booking app where you can select and reserve airplane seats.',
    detail: 'Shows a seat map with available and booked seats in different colors. Click a seat to book or cancel it. Made for college assignment.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 4,
    title: 'Portfolio Website',
    category: 'React',
    emoji: '💻',
    desc: 'My personal portfolio built with React, React Router and CSS Modules.',
    detail: 'This portfolio site! Built using React with multiple pages, dark/light theme using Context API, form validation in Contact page, and lazy loading.',
    tech: ['React', 'React Router', 'CSS Modules'],
  },
]

const CATEGORIES = ['All', 'Frontend', 'Full Stack', 'React']

// Modal uses React Portal - renders outside the normal component tree
function Modal({ project, onClose, theme }) {
  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={`${styles.modal} ${styles[theme]}`}
        onClick={e => e.stopPropagation()}
      >
        <h2>{project.emoji} {project.title}</h2>
        <p className={styles.modalCat}>{project.category}</p>
        <p className={styles.modalDetail}>{project.detail}</p>
        <p><strong>Tech used:</strong> {project.tech.join(', ')}</p>
        <button className={styles.closeBtn} onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  )
}

function Projects() {
  const { theme } = useTheme()
  const [filter, setFilter]     = useState('All')
  const [search, setSearch]     = useState('')
  const [selected, setSelected] = useState(null)

  // Filter projects by category and search
  const shown = PROJECTS.filter(p => {
    const matchCat    = filter === 'All' || p.category === filter
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className={`${styles.page} ${styles[theme]}`}>
      <div className={styles.container}>

        <h1 className={styles.title}>My Projects</h1>

        {/* Search input */}
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className={`${styles.search} ${styles[theme]}`}
        />

        {/* Filter buttons */}
        <div className={styles.filters}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={filter === cat ? styles.filterActive : styles.filter}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project cards - rendered using .map() */}
        <div className={styles.grid}>
          {shown.length > 0 ? (
            shown.map(project => (
              <div key={project.id} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.emoji}>{project.emoji}</span>
                  <span className={styles.cat}>{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p className={styles.desc}>{project.desc}</p>
                <p className={styles.tech}>{project.tech.join(' · ')}</p>
                <button
                  className={styles.viewBtn}
                  onClick={() => setSelected(project)}
                >
                  View Details
                </button>
              </div>
            ))
          ) : (
            <p className={styles.empty}>No projects found.</p>
          )}
        </div>

      </div>

      {/* Show modal when a project is selected */}
      {selected && (
        <Modal
          project={selected}
          onClose={() => setSelected(null)}
          theme={theme}
        />
      )}
    </div>
  )
}

export default Projects

import { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import styles from './Dashboard.module.css'

// Simple stats data
const STATS = [
  { label: 'Projects',      value: '4',   emoji: '' },
  { label: 'Commits',       value: '120', emoji: '' },
  { label: 'Hours Coded',   value: '300', emoji: '' },
  { label: 'Skills',        value: '6',   emoji: '' },
]

// Recent activity data
const ACTIVITY = [
  { text: 'Built Portfolio with React',       time: 'Today',       emoji: '✅' },
  { text: 'Pushed code to GitHub',            time: 'Yesterday',   emoji: '📤' },
  { text: 'Learned React Context API',        time: '2 days ago',  emoji: '📖' },
  { text: 'Fixed bug in Expense Tracker',     time: '3 days ago',  emoji: '🐛' },
  { text: 'Completed Infotise internship',    time: '1 week ago',  emoji: '🎓' },
]

function Dashboard() {
  const { theme, toggleTheme } = useTheme()

  // tab to switch between overview and activity
  const [tab, setTab] = useState('overview')

  return (
    <div className={`${styles.page} ${styles[theme]}`}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Dashboard</h1>
            <p className={styles.sub}>Welcome, Durgesh! 👋</p>
          </div>

          {/* Theme toggle button */}
          <button className={styles.themeBtn} onClick={toggleTheme}>
            {theme === 'dark' ? '☀️ Switch to Light' : '🌙 Switch to Dark'}
          </button>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          <button
            className={tab === 'overview' ? styles.tabActive : styles.tab}
            onClick={() => setTab('overview')}
          >
            Overview
          </button>
          <button
            className={tab === 'activity' ? styles.tabActive : styles.tab}
            onClick={() => setTab('activity')}
          >
            Activity
          </button>
        </div>

        {/* OVERVIEW TAB */}
        {tab === 'overview' && (
          <div>
            {/* Stats - using .map() */}
            <div className={styles.statsGrid}>
              {STATS.map(stat => (
                <div key={stat.label} className={styles.statCard}>
                  <span className={styles.statEmoji}>{stat.emoji}</span>
                  <h2 className={styles.statValue}>{stat.value}+</h2>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Info cards */}
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>🎯 My Goals</h3>
                <ul className={styles.list}>
                  <li>Learn React fully</li>
                  <li>Learn Node.js backend</li>
                  <li>Build more projects</li>
                  <li>Get a job after graduation</li>
                </ul>
              </div>

              <div className={styles.infoCard}>
                <h3>📌 Links</h3>
                <div className={styles.links}>
                  <a href="https://github.com/DurgeshGowda-HB" target="_blank" rel="noreferrer">
                     GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/durgeshgowda-hb" target="_blank" rel="noreferrer">
                     LinkedIn
                  </a>
                  <a href="mailto:example@gmail.com">
                     Email
                  </a>
                </div>
              </div>

              <div className={styles.infoCard}>
                <h3>🟢 Status</h3>
                <p className={styles.available}>● Available for opportunities</p>
                <p className={styles.availText}>
                  Open to internships and entry-level jobs after graduating in 2026.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ACTIVITY TAB */}
        {tab === 'activity' && (
          <div className={styles.activityBox}>
            <h2 className={styles.activityTitle}>Recent Activity</h2>
            {ACTIVITY.map((item, index) => (
              <div key={index} className={styles.activityItem}>
                <span>{item.emoji}</span>
                <div>
                  <p>{item.text}</p>
                  <small className={styles.time}>{item.time}</small>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

export default Dashboard

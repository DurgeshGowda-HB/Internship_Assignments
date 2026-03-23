import { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import styles from './Contact.module.css'

function Contact() {
  const { theme } = useTheme()

  // form state - controlled inputs
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [done, setDone]     = useState(false)

  // update form state on every key press
  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  // check all fields before submit
  function validate() {
    const e = {}
    if (!form.name.trim())    e.name    = 'Please enter your name'
    if (!form.email.trim())   e.email   = 'Please enter your email'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email is not valid'
    if (!form.message.trim()) e.message = 'Please enter a message'
    else if (form.message.length < 10) e.message = 'Message too short (min 10 chars)'
    return e
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setDone(true)
  }

  return (
    <div className={`${styles.page} ${styles[theme]}`}>
      <div className={styles.container}>

        <h1 className={styles.title}>Contact Me</h1>
        <p className={styles.sub}>Have a question or want to work together? Send me a message!</p>

        <div className={styles.grid}>

          {/* Contact info */}
          <div className={styles.info}>
            <h3>Get In Touch</h3>
            <div className={styles.infoItem}>
              <span>📧</span>
              <div>
                <p className={styles.label}>Email</p>
                <p>example@gmail.com</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span>📍</span>
              <div>
                <p className={styles.label}>Location</p>
                <p>Mysore, Karnataka</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span>🐙</span>
              <div>
                <p className={styles.label}>GitHub</p>
                <a href="https://github.com/DurgeshGowda-HB" target="_blank" rel="noreferrer" className={styles.link}>
                  github.com/DurgeshGowda-HB
                </a>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span>💼</span>
              <div>
                <p className={styles.label}>LinkedIn</p>
                <a href="https://www.linkedin.com/in/durgeshgowda-hb" target="_blank" rel="noreferrer" className={styles.link}>
                  linkedin.com/in/durgeshgowda-hb
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {done ? (
              <div className={styles.success}>
                <h3>✅ Message Sent!</h3>
                <p>Thanks {form.name}! I will reply to {form.email} soon.</p>
                <button onClick={() => { setDone(false); setForm({ name: '', email: '', message: '' }) }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>

                <div className={styles.field}>
                  <label>Your Name *</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Durgesh Gowda"
                    value={form.name}
                    onChange={handleChange}
                    className={`${styles.input} ${styles[theme]} ${errors.name ? styles.inputErr : ''}`}
                  />
                  {errors.name && <span className={styles.err}>{errors.name}</span>}
                </div>

                <div className={styles.field}>
                  <label>Your Email *</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@gmail.com"
                    value={form.email}
                    onChange={handleChange}
                    className={`${styles.input} ${styles[theme]} ${errors.email ? styles.inputErr : ''}`}
                  />
                  {errors.email && <span className={styles.err}>{errors.email}</span>}
                </div>

                <div className={styles.field}>
                  <label>Message *</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Write your message here..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${styles.input} ${styles[theme]} ${errors.message ? styles.inputErr : ''}`}
                  />
                  {errors.message && <span className={styles.err}>{errors.message}</span>}
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send Message
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact

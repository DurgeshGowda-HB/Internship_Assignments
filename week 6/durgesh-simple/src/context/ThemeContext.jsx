import { createContext, useContext, useState, useEffect } from 'react'

// createContext makes a global box to store theme
const ThemeContext = createContext()

export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  )

  // when theme changes, save it and apply to body
  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.body.className = theme
  }, [theme])

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// custom hook so any file can use theme easily
export function useTheme() {
  return useContext(ThemeContext)
}

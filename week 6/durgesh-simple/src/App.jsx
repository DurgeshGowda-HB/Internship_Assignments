import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

// lazy loading - page loads only when user visits it
const Home      = lazy(() => import('./pages/Home/Home'))
const About     = lazy(() => import('./pages/About/About'))
const Projects  = lazy(() => import('./pages/Projects/Projects'))
const Contact   = lazy(() => import('./pages/Contact/Contact'))
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'))

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<p style={{ padding: '100px', textAlign: 'center' }}>Loading...</p>}>
          <Routes>
            <Route path="/"          element={<Home />} />
            <Route path="/about"     element={<About />} />
            <Route path="/projects"  element={<Projects />} />
            <Route path="/contact"   element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

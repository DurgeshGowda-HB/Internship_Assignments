import { useEffect, useRef, useState } from 'react'

// HOC = Higher Order Component
// Takes a component, returns the same component with fade-in animation
function withAnimation(Component) {
  return function AnimatedComponent(props) {
    const ref = useRef(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setShow(true)
      })
      if (ref.current) observer.observe(ref.current)
      return () => observer.disconnect()
    }, [])

    return (
      <div
        ref={ref}
        style={{
          opacity: show ? 1 : 0,
          transform: show ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.5s, transform 0.5s'
        }}
      >
        <Component {...props} />
      </div>
    )
  }
}

export default withAnimation

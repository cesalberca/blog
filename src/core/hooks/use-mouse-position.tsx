import { useEffect, useState } from 'react'

const getMousePosition = (e: MouseEvent) => {
  return {
    x: e.clientX,
    y: e.clientY,
  }
}

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition(getMousePosition(event))
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return mousePosition
}

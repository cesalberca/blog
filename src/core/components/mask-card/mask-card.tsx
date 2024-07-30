'use client'

import { type FC, type PropsWithChildren, useEffect, useRef, useState } from 'react'
import './mask-card.css'
import { motion, useAnimation, useMotionValue } from 'framer-motion'

// Linear interpolation
const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b

// Gets the mouse position
const getMousePos = (e: MouseEvent) => {
  return {
    x: e.clientX,
    y: e.clientY,
  }
}

// This function generates a random string of a given length
const getRandomString = (length: number) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition(getMousePos(event))
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return mousePosition
}

const Item: FC<PropsWithChildren> = ({ children }) => {
  const itemRef = useRef<HTMLDivElement | null>(null)

  const mousePosition = useMousePosition()
  const decoRef = useRef<HTMLDivElement | null>(null)
  const [randomString, setRandomString] = useState(getRandomString(2000))
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const controls = useAnimation()
  const [scrollVal, setScrollVal] = useState({ x: window.scrollX, y: window.scrollY })
  const [rect, setRect] = useState<DOMRect | null>(null)

  useEffect(() => {
    const handleResize = () => {
      if (itemRef.current) {
        setScrollVal({ x: window.scrollX, y: window.scrollY })
        setRect(itemRef.current.getBoundingClientRect())
      }
    }

    window.addEventListener('resize', handleResize)

    const handleMouseEnter = () => {
      controls.start({ opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } })
    }

    const handleMouseLeave = () => {
      controls.start({ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } })
    }

    if (itemRef.current) {
      itemRef.current.addEventListener('mouseenter', handleMouseEnter)
      itemRef.current.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      window.removeEventListener('resize', handleResize)

      if (itemRef.current) {
        itemRef.current.removeEventListener('mouseenter', handleMouseEnter)
        itemRef.current.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [controls])

  useEffect(() => {
    const updatePosition = () => {
      if (rect) {
        const scrollDiff = {
          x: scrollVal.x - window.scrollX,
          y: scrollVal.y - window.scrollY,
        }

        const newX = mousePosition.x - (scrollDiff.x + rect.left)
        const newY = mousePosition.y - (scrollDiff.y + rect.top)

        x.set(lerp(x.get(), newX, 0.1))
        y.set(lerp(y.get(), newY, 0.1))

        if (itemRef.current) {
          itemRef.current.style.setProperty('--x', `${x.get()}px`)
          itemRef.current.style.setProperty('--y', `${y.get()}px`)
        }

        if (decoRef.current) {
          decoRef.current.innerHTML = randomString
        }

        requestAnimationFrame(updatePosition)
      }
    }

    updatePosition()
  }, [mousePosition, randomString, rect, scrollVal, x, y])

  useEffect(() => {
    const handleMouseMove = () => {
      setRandomString(getRandomString(2000))
    }

    if (itemRef.current) {
      itemRef.current.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (itemRef.current) {
        itemRef.current.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <div className="grid__item-img" ref={itemRef}>
      <motion.div
        ref={decoRef}
        initial={{ opacity: 0 }}
        animate={controls}
        className="grid__item-img-deco"
      ></motion.div>
      {children}
    </div>
  )
}

export const MaskCard: FC<PropsWithChildren> = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  return (
    <div className="grid">
      <div className="grid__item">
        <Item>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none"></svg>
        </Item>
        <p className="grid__item-label">
          We designed and developed a visually appealing website for CodeCrafters, highlighting their coding expertise.
        </p>
        <span className="grid__item-tag">Branding</span>
      </div>
    </div>
  )
}

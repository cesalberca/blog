'use client'

import { type FC, type PropsWithChildren, useEffect, useRef, useState } from 'react'
import './mask-card.css'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import { linearInterpolation } from '@/core/3d/linear-interpolation'
import { useMousePosition } from '@/core/hooks/use-mouse-position'
import { getRandomString } from '@/core/utils/get-random-string'

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

    const handleMouseEnter = () => {
      controls.start({ opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } })
    }

    const handleMouseLeave = () => {
      controls.start({ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } })
    }

    if (itemRef.current) {
      console.log('handleResize')
      window.addEventListener('resize', handleResize)
      itemRef.current.addEventListener('mouseenter', handleMouseEnter)
      itemRef.current.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (itemRef.current) {
        window.removeEventListener('resize', handleResize)
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

        x.set(linearInterpolation(x.get(), newX, 0.1))
        y.set(linearInterpolation(y.get(), newY, 0.1))

        if (itemRef.current) {
          itemRef.current.style.setProperty('--x', `${x.get()}px`)
          itemRef.current.style.setProperty('--y', `${y.get()}px`)
        }

        if (decoRef.current) {
          console.log('updatePosition')
          decoRef.current.innerHTML = randomString
        }
      }
    }

    updatePosition()
  }, [mousePosition, randomString, rect, scrollVal, x, y])

  useEffect(() => {
    const handleMouseMove = () => {
      setRandomString(getRandomString(2000))
    }
    const currentRef = itemRef.current

    if (currentRef) {
      console.log('mouseMove')
      currentRef.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [itemRef])

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

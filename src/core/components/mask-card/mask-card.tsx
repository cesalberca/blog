'use client'

import React, { type FC, type PropsWithChildren, type ReactNode, useCallback, useEffect, useRef, useState } from 'react'
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
  const [scrollVal, setScrollVal] = useState({ x: 0, y: 0 })

  const { top, left } = itemRef.current?.getBoundingClientRect() ?? { top: 0, left: 0 }

  const updatePosition = useCallback(() => {
    const scrollDiff = {
      x: scrollVal.x - window.scrollX,
      y: scrollVal.y - window.scrollY,
    }

    const newX = mousePosition.x - (scrollDiff.x + left)
    const newY = mousePosition.y - (scrollDiff.y + top)

    x.set(linearInterpolation(x.get(), newX, 0.1))
    y.set(linearInterpolation(y.get(), newY, 0.1))

    if (itemRef.current) {
      itemRef.current.style.setProperty('--x', `${x.get()}px`)
      itemRef.current.style.setProperty('--y', `${y.get()}px`)
    }
  }, [left, mousePosition, scrollVal, top, x, y])

  useEffect(() => {
    if (decoRef.current) {
      decoRef.current.innerHTML = randomString
    }
  }, [decoRef, randomString])

  useEffect(() => {
    const currentRef = itemRef.current
    const handleResize = () => {
      if (currentRef) {
        setScrollVal({ x: window.scrollX, y: window.scrollY })
      }
    }

    const handleMouseEnter = () => {
      controls.start({ opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } })
    }

    const handleMouseLeave = () => {
      controls.start({ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } })
    }

    const handleMouseMove = () => {
      setRandomString(getRandomString(2000))
    }

    if (currentRef) {
      setScrollVal({ x: window.scrollX, y: window.scrollY })
      window.addEventListener('resize', handleResize)
      currentRef.addEventListener('mouseenter', handleMouseEnter)
      currentRef.addEventListener('mouseleave', handleMouseLeave)
      currentRef.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (currentRef) {
        window.removeEventListener('resize', handleResize)
        currentRef.removeEventListener('mouseenter', handleMouseEnter)
        currentRef.removeEventListener('mouseleave', handleMouseLeave)
        currentRef.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [controls])

  useEffect(() => {
    updatePosition()
  }, [mousePosition, randomString, left, top, scrollVal, x, y, updatePosition])

  return (
    <div className="grid__item-img" ref={itemRef}>
      <motion.div ref={decoRef} animate={controls} className="grid__item-img-deco"></motion.div>
      <span className="relative z-10">{children}</span>
    </div>
  )
}

export const MaskCard: FC<PropsWithChildren<{ icon: ReactNode }>> = ({ children, icon }) => {
  return (
    <div className="grid grid-col-1 border bg-background">
      <div className="grid__item">
        <Item>{icon}</Item>
        {children}
      </div>
    </div>
  )
}

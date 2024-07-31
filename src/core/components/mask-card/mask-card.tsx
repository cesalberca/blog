'use client'

import React, { type FC, type PropsWithChildren, type ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import styles from './mask-card.module.css'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import { linearInterpolation } from '@/core/3d/linear-interpolation'
import { useMousePosition } from '@/core/hooks/use-mouse-position'
import { getRandomString } from '@/core/utils/get-random-string'
import { cn } from '@/lib/utils'

const Item: FC<PropsWithChildren> = ({ children }) => {
  const itemRef = useRef<HTMLDivElement | null>(null)
  const mousePosition = useMousePosition()
  const decoRef = useRef<HTMLDivElement | null>(null)
  const [randomString, setRandomString] = useState(getRandomString(2000))
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const controls = useAnimation()
  const [scrollVal, setScrollVal] = useState({ x: 0, y: 0 })

  console.log('Item')

  const updatePosition = useCallback(() => {
    if (!itemRef.current) return

    const { top, left } = itemRef.current.getBoundingClientRect()
    const scrollDiff = {
      x: scrollVal.x - window.scrollX,
      y: scrollVal.y - window.scrollY,
    }

    const newX = mousePosition.x - (scrollDiff.x + left)
    const newY = mousePosition.y - (scrollDiff.y + top)

    x.set(linearInterpolation(x.get(), newX, 0.1))
    y.set(linearInterpolation(y.get(), newY, 0.1))

    itemRef.current.style.setProperty('--x', `${x.get()}px`)
    itemRef.current.style.setProperty('--y', `${y.get()}px`)
  }, [mousePosition, scrollVal, x, y])

  useEffect(() => {
    if (decoRef.current) {
      decoRef.current.innerHTML = randomString
    }
  }, [randomString])

  useEffect(() => {
    const handleResize = () => {
      setScrollVal({ x: window.scrollX, y: window.scrollY })
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

    if (itemRef.current) {
      setScrollVal({ x: window.scrollX, y: window.scrollY })
      window.addEventListener('resize', handleResize)
      itemRef.current.addEventListener('mouseenter', handleMouseEnter)
      itemRef.current.addEventListener('mouseleave', handleMouseLeave)
      itemRef.current.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      if (itemRef.current) {
        itemRef.current.removeEventListener('mouseenter', handleMouseEnter)
        itemRef.current.removeEventListener('mouseleave', handleMouseLeave)
        itemRef.current.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [controls])

  useEffect(() => {
    updatePosition()
  }, [mousePosition, scrollVal, updatePosition])

  return (
    <div
      className={cn(
        "w-full h-full [aspect-ratio:1] relative overflow-hidden grid place-items-center [--x:0] [--y:0] rounded after:content[''] after:top-0  after:absolute after:left-0 after:w-full after:h-full",
        styles['radial-background'],
      )}
      ref={itemRef}
    >
      <motion.div
        ref={decoRef}
        animate={controls}
        className={cn(
          'absolute top-0 left-0 h-full w-full font-mono text-xs break-words leading-4 text-white opacity-0',
          styles.mask,
        )}
      ></motion.div>
      <span className="relative z-10">{children}</span>
    </div>
  )
}

export const MaskCard: FC<PropsWithChildren<{ icon: ReactNode }>> = ({ children, icon }) => {
  return (
    <div className="grid grid-col-1 border bg-background">
      <div className="grid p-m gap-4 bg-background">
        <Item>{icon}</Item>
        {children}
      </div>
    </div>
  )
}

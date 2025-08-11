'use client'

import React, { type FC, type MouseEvent, type PropsWithChildren, useRef } from 'react'
import { motion, useAnimation, useMotionValue, useScroll } from 'framer-motion'
import { linearInterpolation } from '@/core/3d/linear-interpolation'
import { getRandomString } from '@/core/utils/get-random-string'
import { cn } from '@/lib/utils'
import styles from '@/core/components/background/background.module.css'

export const Background: FC<PropsWithChildren<{ className?: string; image?: string }>> = ({
  children,
  className,
  image,
}) => {
  const itemRef = useRef<HTMLDivElement | null>(null)
  const decoRef = useRef<HTMLDivElement | null>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const controls = useAnimation()
  const scroll = useScroll()

  const updatePosition = (e: MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current || !decoRef.current) return

    const mousePosition = {
      x: e.clientX,
      y: e.clientY,
    }

    const { top, left } = itemRef.current.getBoundingClientRect()
    const scrollDiff = {
      x: scroll.scrollX.get() - window.scrollX,
      y: scroll.scrollY.get() - window.scrollY,
    }

    const newX = mousePosition.x - (scrollDiff.x + left)
    const newY = mousePosition.y - (scrollDiff.y + top)

    x.set(linearInterpolation(x.get(), newX, 0.1))
    y.set(linearInterpolation(y.get(), newY, 0.1))

    itemRef.current.style.setProperty('--x', `${x.get()}px`)
    itemRef.current.style.setProperty('--y', `${y.get()}px`)

    decoRef.current.innerHTML = getRandomString((itemRef.current.clientWidth * itemRef.current.clientHeight) / 50)
  }

  function setBackground() {
    if (decoRef.current && itemRef.current) {
      controls.start({ opacity: image ? 0.5 : 0.25, transition: { duration: 0.5, ease: 'easeInOut' } })
      const xPosition = itemRef.current.clientWidth / 2
      const yPosition = itemRef.current.clientHeight / 2
      itemRef.current.style.setProperty('--x', `${image ? xPosition : 0}px`)
      itemRef.current.style.setProperty('--y', `${image ? yPosition : 0}px`)
      itemRef.current.style.setProperty('--size', `${itemRef.current.clientWidth * 0.75}px`)
      x.set(linearInterpolation(x.get(), 0, 0.1))
      y.set(linearInterpolation(y.get(), 0, 0.1))
      decoRef.current.innerHTML = getRandomString((itemRef.current.clientWidth * itemRef.current.clientHeight) / 50)
    }
  }

  return (
    <motion.div
      className={cn(
        "w-full h-full relative overflow-hidden grid place-items-center [--x:0] [--y:0] rounded after:content[''] after:top-0 after:absolute after:left-0 after:w-full after:h-full",
        className,
      )}
      ref={itemRef}
      onMouseMove={updatePosition}
    >
      <motion.div
        ref={decoRef}
        animate={controls}
        onViewportEnter={() => {
          setBackground()
        }}
        style={{ backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        className={cn(
          'absolute top-0 left-0 h-full w-full font-mono text-xs break-words leading-4 opacity-0',
          styles.mask,
          image ? 'text-transparent' : 'text-white',
          '[background-clip:text] [-webkit-background-clip:text]',
        )}
      ></motion.div>
      <span className="relative z-10">{children}</span>
    </motion.div>
  )
}

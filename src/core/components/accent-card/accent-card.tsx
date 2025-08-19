'use client'

import React, { type FC, type PropsWithChildren, useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import { MouseIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const RATIO = 32.5
const ROTATION_RANGE = 20
const HALF_ROTATION_RANGE = RATIO / 2

export const AccentCard: FC<
  PropsWithChildren<{
    defaultTiltX?: number
    defaultTiltY?: number
    className?: string
  }>
> = ({ children, defaultTiltY = 0, defaultTiltX = 0, className }) => {
  const ref = useRef<HTMLDivElement | null>(null)

  const x = useMotionValue(defaultTiltX)
  const y = useMotionValue(defaultTiltY)

  const xSpring = useSpring(x)
  const ySpring = useSpring(y)

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0]

    const rect = ref.current.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1
    const rY = mouseX / width - HALF_ROTATION_RANGE

    x.set(rX)
    y.set(rY)
    return undefined
  }

  const handleMouseLeave = () => {
    x.set(defaultTiltX)
    y.set(defaultTiltY)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform,
      }}
      className={cn('relative rounded-xl bg-accent', className)}
    >
      <div
        className="mx-auto drop-shadow absolute top-0 left-[50%]"
        style={{
          transform: 'translateZ(75px) translateY(40px)',
        }}
      >
        <MouseIcon className="text-4xl" />
      </div>
      <div
        style={{
          transform: 'translateZ(50px)',
        }}
      >
        {children}
      </div>
    </motion.div>
  )
}

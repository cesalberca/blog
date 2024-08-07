'use client'

import { type FC, useState, type PropsWithChildren, Children } from 'react'
import { motion } from 'framer-motion'
import { getRandomString } from '@/core/utils/get-random-string'
import { useInterval } from '@/core/hooks/use-interval'
import { cn } from '@/lib/utils'

const CYCLES_PER_LETTER = 2
const SHUFFLE_TIME = 50
const DELAY_TIME = 1000

interface Props {
  repeat?: boolean
  onComplete?: () => void
  fixedWidth?: boolean
}

export const ScrambleText: FC<PropsWithChildren<Props>> = ({
  children,
  onComplete,
  repeat = false,
  fixedWidth = false,
}) => {
  const text = Children.toArray(children).join('')

  const [stateText, setStateText] = useState(text)
  const [position, setPosition] = useState(0)
  const [stopInterval, setStopInterval] = useState(false)
  const [delay, setDelay] = useState(false)
  const [startAnimation, setStartAnimation] = useState(false)

  useInterval(
    () => {
      if (delay || !startAnimation) {
        return
      }

      const newPos = position + 1
      const scrambled = text
        .split('')
        .map((char, index) => {
          if (newPos / CYCLES_PER_LETTER > index) {
            return char
          }

          if (char === ' ') {
            return ' '
          }

          return getRandomString(1)
        })
        .join('')

      setStateText(scrambled)
      setPosition(newPos)

      if (newPos >= text.length * CYCLES_PER_LETTER) {
        setStateText(text)
        setPosition(0)
        if (!repeat) {
          setStopInterval(true)
          onComplete?.()
        } else {
          setDelay(true)
          setTimeout(() => {
            setDelay(false)
          }, DELAY_TIME)
        }
      }
    },
    stopInterval || delay ? null : SHUFFLE_TIME,
  )

  return (
    <motion.span className="relative" onViewportEnter={() => setStartAnimation(true)}>
      {stateText}
    </motion.span>
  )
}

'use client'

import React, { type FC, useState } from 'react'
import { motion } from 'framer-motion'
import { getRandomString } from '@/core/utils/get-random-string'
import { useInterval } from '@/core/hooks/use-interval'

const CYCLES_PER_LETTER = 2
const SHUFFLE_TIME = 50

interface Props {
  text: string
  repeat?: boolean
}

export const ScrambleText: FC<Props> = ({ text, repeat = false }) => {
  const [stateText, setStateText] = useState(text)
  const [position, setPosition] = useState(0)
  const [stopInterval, setStopInterval] = useState(false)

  useInterval(
    () => {
      const newPos = position + 1
      const scrambled = text
        .split('')
        .map((char, index) => {
          if (newPos / CYCLES_PER_LETTER > index) {
            return char
          }
          return getRandomString(1)
        })
        .join('')

      setStateText(scrambled)
      setPosition(newPos)

      if (newPos >= text.length * CYCLES_PER_LETTER) {
        setStateText(text)
        setPosition(0)
        setStopInterval(true)
      }
    },
    stopInterval ? null : SHUFFLE_TIME,
  )

  return <motion.span className="relative">{stateText}</motion.span>
}

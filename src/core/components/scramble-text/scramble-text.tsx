'use client'

import React, { type FC, useState } from 'react'
import { motion } from 'framer-motion'
import { getRandomString } from '@/core/utils/get-random-string'
import { useInterval } from '@/core/hooks/use-interval'

const CYCLES_PER_LETTER = 2
const SHUFFLE_TIME = 50

type Props = {
  text: string
}

export const ScrambleText: FC<Props> = ({ text }) => {
  const [stateText, setStateText] = useState(text)
  const [position, setPosition] = useState(0)

  useInterval(() => {
    const scrambled = text
      .split('')
      .map((char, index) => {
        if (position / CYCLES_PER_LETTER > index) {
          return char
        }

        return getRandomString(1)
      })
      .join('')

    setStateText(scrambled)
    setPosition(x => x + 1)

    if (position >= text.length * CYCLES_PER_LETTER) {
      stopScramble()
    }
  }, SHUFFLE_TIME)

  const stopScramble = () => {
    setStateText(text)
  }

  return (
    <motion.div className="relative overflow-hidden" transition={{ repeat: Infinity, ease: 'linear' }}>
      <div className="relative z-10 flex items-center gap-2">
        <span>{stateText}</span>
      </div>
    </motion.div>
  )
}

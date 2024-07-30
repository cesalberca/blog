'use client'

import React, { type FC, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { getRandomString } from '@/core/utils/get-random-string'

const CYCLES_PER_LETTER = 2
const SHUFFLE_TIME = 50

type Props = {
  text: string
}

export const ScrambleText: FC<Props> = ({ text }) => {
  const [stateText, setStateText] = useState(text)
  const [position, setPosition] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startScramble = () => {
    intervalRef.current = setInterval(() => {
      setPosition(prev => {
        const newPos = prev + 1
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

        if (newPos >= text.length * CYCLES_PER_LETTER) {
          clearInterval(intervalRef.current!)
          setStateText(text)
        }

        return newPos
      })
    }, SHUFFLE_TIME)
  }

  useEffect(() => {
    setPosition(0)
    startScramble()
    return () => clearInterval(intervalRef.current!)
  }, [text])

  return (
    <motion.div className="relative overflow-hidden" transition={{ repeat: Infinity, ease: 'linear' }}>
      <div className="relative z-10 flex items-center gap-2">
        <span>{stateText}</span>
      </div>
    </motion.div>
  )
}

'use client'

import React, { type FC, useState } from 'react'
import { ScrambleText } from '@/core/components/scramble-text/scramble-text'
import { motion } from 'framer-motion'

interface Props {
  texts: string[]
}

export const ScrambleList: FC<Props> = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [key, setKey] = useState(0)

  const handleComplete = () => {
    setTimeout(() => {
      setCurrentIndex(prevIndex => {
        const newIndex = (prevIndex + 1) % texts.length
        setKey(newIndex)
        return newIndex
      })
    }, 1000)
  }

  return (
    <motion.div
      key={key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ScrambleText text={texts[currentIndex]} onComplete={handleComplete} />
    </motion.div>
  )
}

'use client'

import { type FC, useState } from 'react'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { motion } from 'framer-motion'

interface Props {
  texts: string[]
}

export const AccentList: FC<Props> = ({ texts }) => {
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
    <motion.span
      key={key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AccentText onComplete={handleComplete}>{texts[currentIndex]}</AccentText>
    </motion.span>
  )
}

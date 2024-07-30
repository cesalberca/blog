'use client'

import { type FC, type PropsWithChildren, useState } from 'react'
import { ScrambleText } from '@/core/components/scramble-text/scramble-text'
import { SocialMedia } from '@/core/components/social-media/social-media'
import { Hero } from '@/core/components/hero/hero'
import { useTranslations } from 'next-intl'
import { useInterval } from '@/core/hooks/use-interval'

export const HeroHome: FC<
  PropsWithChildren<{
    texts: string[]
  }>
> = ({ children, texts }) => {
  const [index, setIndex] = useState(0)

  useInterval(() => {
    setIndex((index + 1) % texts.length)
  }, 3000)

  return (
    <Hero image="/assets/images/me.png">
      <header>
        <h2>
          <ScrambleText text={texts[index]}></ScrambleText>
        </h2>
        {children}
      </header>
    </Hero>
  )
}

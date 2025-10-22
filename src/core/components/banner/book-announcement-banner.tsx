'use client'

import type { FC } from 'react'
import { useState, useEffect } from 'react'
import { Banner } from './banner'
import { Link } from '@/core/components/link/link'
import { getLocalStorage, setLocalStorage } from '@/core/utils/local-storage'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { cn } from '@/lib/utils'

export const BookAnnouncementBanner: FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const bannerDismissed = getLocalStorage('bookAnnouncementBannerDismissed')
    if (!bannerDismissed) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 0)
      return () => clearTimeout(timer)
    }
    return
  }, [])

  const handleDismiss = () => {
    setLocalStorage('bookAnnouncementBannerDismissed', 'true')
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <Banner variant="announcement" position="top" dismissible={true} onDismiss={handleDismiss}>
      <div className="flex flex-row items-center justify-center gap-2 text-center sm:text-left text-xs">
        <Link type="invisible" className={cn('block sm:hidden')} href="/software-cafrers">
          <strong>📚 ¡Nuevo libro disponible!</strong>
        </Link>
        <strong className="hidden sm:block">📚 ¡Nuevo libro disponible!</strong>

        <p className="font-mono hidden sm:block text-xs">
          <AccentText onComplete={() => setAnimate(true)}>
            Software Cafrers: Haciendo Código que Haría Vomitar a una Cabra
          </AccentText>
        </p>
        <Link
          className={cn('transition-all hidden sm:block opacity-0', { 'opacity-100': animate })}
          href="/software-cafrers"
        >
          Descubre más →
        </Link>
      </div>
    </Banner>
  )
}

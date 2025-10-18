'use client'

import { type FC, useCallback, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/core/components/link/link'
import { X } from 'lucide-react'
import { motion } from 'framer-motion'
import { getLocalStorage, setLocalStorage } from '@/core/utils/local-storage'

export const CookieBanner: FC = () => {
  const t = useTranslations('common')
  const [isVisible, setIsVisible] = useState(false)
  const [userInput, setUserInput] = useState('')

  useEffect(() => {
    const cookieChoice = getLocalStorage('cookieChoice')
    if (!cookieChoice) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
    return
  }, [])

  const acceptCookies = useCallback(() => {
    setLocalStorage('cookieChoice', 'accepted')
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
    })
    setIsVisible(false)
  }, [])

  const denyCookies = useCallback(() => {
    setLocalStorage('cookieChoice', 'denied')
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
    })
    setIsVisible(false)
  }, [])

  const handleKeyDown = useCallback(
    (e: globalThis.KeyboardEvent) => {
      if (!isVisible) return

      const key = e.key.toLowerCase()
      if (key === 'y') {
        acceptCookies()
      } else if (key === 'n') {
        denyCookies()
      } else if (key === 'backspace') {
        setUserInput(prev => prev.slice(0, -1))
      } else if (key.length === 1) {
        // Only add printable characters
        setUserInput(prev => prev + e.key)
      }
    },
    [isVisible, acceptCookies, denyCookies],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  const closeBanner = useCallback(() => {
    denyCookies()
  }, [denyCookies])

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-0 right-0 z-50 max-w-md w-full p-4 md:w-80 shadow-lg">
      <div className="bg-black border border-white rounded-md overflow-hidden">
        {/* Terminal header */}
        <div className="bg-black px-4 py-2 flex items-center justify-between border-b border-white">
          <div className="text-foreground font-mono text-sm">{t('cookies.terminalPath')}</div>
          <div className="flex space-x-2">
            <button
              onClick={closeBanner}
              className="w-3 h-3 rounded-full bg-white flex items-center justify-center"
              aria-label={t('cookies.close')}
            >
              <X className="w-2 h-2 text-black" />
            </button>
          </div>
        </div>

        <div className="p-4 font-mono text-sm">
          <div className="text-foreground">$ echo &#34;{t('cookies.message')}&#34;</div>
          <div className="mt-2 text-foreground">{t('cookies.description')}</div>
          <div className="mt-2 text-foreground">
            <Link href="/cookies" className="text-foreground underline">
              {t('cookies.learnMore')}
            </Link>
          </div>
          <div className="mt-2 text-foreground">{t('cookies.prompt')}</div>
          <div className="mt-2 text-foreground flex items-center">
            $ {userInput}
            <motion.span
              className="inline-block w-[8px] h-[15px] bg-white ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'loop',
                times: [0, 0.5, 1],
                ease: 'linear',
              }}
            />
          </div>
          <div className="mt-2 text-foreground">
            <span className="mr-4">
              <button
                onClick={acceptCookies}
                className="text-foreground hover:text-green-400 transition-colors focus:outline-none font-mono"
                aria-label={t('cookies.acceptAriaLabel')}
              >
                {t('cookies.accept')}
              </button>
            </span>
            <span>
              <button
                onClick={denyCookies}
                className="text-foreground hover:text-red-400 transition-colors focus:outline-none font-mono"
                aria-label={t('cookies.denyAriaLabel')}
              >
                {t('cookies.deny')}
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

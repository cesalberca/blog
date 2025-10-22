import { type FC, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Banner } from './banner'
import { Link } from '@/core/components/link/link'
import { getLocalStorage, setLocalStorage } from '@/core/utils/local-storage'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { cn } from '@/lib/utils'

export const BookAnnouncementBanner: FC<{ onClose: () => void }> = ({ onClose }) => {
  const t = useTranslations('common.bookAnnouncementBanner')
  const [isVisible, setIsVisible] = useState(false)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const bannerDismissed = getLocalStorage('bookAnnouncementBannerDismissed')
    if (!bannerDismissed) {
      setIsVisible(true)
    }
    return
  }, [])

  const handleDismiss = () => {
    setLocalStorage('bookAnnouncementBannerDismissed', 'true')
    setIsVisible(false)
    onClose()
  }

  if (!isVisible) {
    return null
  }

  return (
    <Banner variant="announcement" position="top" dismissible={true} onDismiss={handleDismiss}>
      <div className="flex flex-row items-center justify-center gap-2 text-center sm:text-left text-xs">
        <Link type="invisible" className={cn('block sm:hidden')} href="/software-cafrers">
          <strong>{t('newBookAvailable')}</strong>
        </Link>
        <strong className="hidden sm:block">{t('newBookAvailable')}</strong>

        <p className="font-mono hidden sm:block text-xs">
          <AccentText onComplete={() => setAnimate(true)}>{t('bookTitle')}</AccentText>
        </p>
        <Link
          className={cn('transition-all hidden sm:block opacity-0', { 'opacity-100': animate })}
          href="/software-cafrers"
        >
          {t('discoverMore')}
        </Link>
      </div>
    </Banner>
  )
}

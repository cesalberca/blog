import type { FC } from 'react'
import { SocialMedia } from '@/core/components/social-media/social-media'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/core/components/link/link'
import { Datetime } from '@/core/datetime'
import { Newsletter } from '@/core/components/newsletter/newsletter'

export const Footer: FC = () => {
  const t = useTranslations()
  return (
    <footer className="py-6 md:py-14 flex flex-col items-center gap-6">
      <div className="flex flex-col items-start space-y-4">
        <div className="flex items-center space-x-2">
          <Image src="/assets/logo.svg" width={32} height={32} alt={t('common.logo')} className="h-6 w-6" />
          <span className="text-lg">{t('home.title')}</span>
        </div>
        <p className="mt-8 text-neutral-600 dark:text-neutral-300">
          {t('common.license', { date: Datetime.fromNow().year })}
        </p>
      </div>
      <div className="flex flex-col items-end space-y-4">
        <Link to="mailto:dev@cesalberca.com" type="invisible">
          {t('common.email')}
        </Link>
      </div>
      <div className="w-full max-w-md">
        <Newsletter />
      </div>
      <div className="flex items-center justify-end space-x-4">
        <SocialMedia />
      </div>
    </footer>
  )
}

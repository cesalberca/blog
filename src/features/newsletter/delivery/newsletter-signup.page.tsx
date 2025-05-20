import type { FC } from 'react'
import { useTranslations } from 'next-intl'
import { Newsletter } from '@/core/components/newsletter/newsletter'
import { Page } from '@/core/components/page/page'
import { AccentText } from '@/core/components/accent-text/accent-text'

export const NewsletterSignupPage: FC = () => {
  const t = useTranslations()

  return (
    <Page>
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="max-w-2xl w-full text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">
            <AccentText>{t('newsletter.signupTitle')}</AccentText>
          </h1>
          <p className="text-xl mb-6">{t('newsletter.signupQuestion')}</p>
          <p className="text-lg mb-8">{t('newsletter.signupDescription')}</p>
        </div>
        <div className="max-w-md w-full">
          <Newsletter defaultExpanded={true} />
        </div>
      </div>
    </Page>
  )
}

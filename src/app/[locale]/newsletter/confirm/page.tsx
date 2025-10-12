'use client'

import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { CheckCircle, X, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Page } from '@/core/components/page/page'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { httpClient } from '@/lib/http-client'

type ConfirmationState = 'loading' | 'success' | 'error'

const NewsletterConfirmPage: FC = () => {
  const t = useTranslations()
  const searchParams = useSearchParams()
  const [state, setState] = useState<ConfirmationState>('loading')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [isAlreadyConfirmed, setIsAlreadyConfirmed] = useState<boolean>(false)

  useEffect(() => {
    const confirmSubscription = async () => {
      const token = searchParams.get('token')
      const email = searchParams.get('email')

      if (!token) {
        setState('error')
        setErrorMessage('Missing confirmation token')
        return
      }

      if (!email) {
        setState('error')
        setErrorMessage('Missing confirmation email')
        return
      }

      try {
        const response = await httpClient.get('/api/newsletter/confirm', {
          params: {
            token,
            email,
          },
        })

        setState('success')
        // Check if this was already confirmed or already subscribed
        if (response.data.alreadyConfirmed || response.data.alreadySubscribed) {
          setIsAlreadyConfirmed(true)
        }
      } catch (error: any) {
        setState('error')
        setErrorMessage('An unexpected error occurred')
      }
    }

    confirmSubscription()
  }, [searchParams])

  const renderContent = () => {
    switch (state) {
      case 'loading':
        return (
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <Loader2 className="h-16 w-16 text-blue-500 animate-spin" />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">
                <AccentText>Confirming your subscription...</AccentText>
              </h1>
              <p className="text-lg text-muted-foreground">Please wait while we process your confirmation.</p>
            </div>
          </div>
        )

      case 'success':
        return (
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">
                <AccentText>{t('newsletter.confirmationSuccess')}</AccentText>
              </h1>
              <p className="text-lg text-muted-foreground">
                {isAlreadyConfirmed
                  ? t('newsletter.alreadyConfirmedMessage')
                  : t('newsletter.confirmationSuccessMessage')}
              </p>
              {!isAlreadyConfirmed && <p className="text-muted-foreground">{t('newsletter.welcomeEmailSent')}</p>}
              {isAlreadyConfirmed && <p className="text-muted-foreground">{t('newsletter.noAdditionalEmails')}</p>}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/blog">{t('newsletter.browseBlog')}</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">{t('newsletter.backHome')}</Link>
              </Button>
            </div>
          </div>
        )

      case 'error':
        return (
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <X className="h-16 w-16 text-red-500" />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">
                <AccentText>Confirmation Failed</AccentText>
              </h1>
              <p className="text-lg text-muted-foreground">
                {errorMessage || 'We were unable to confirm your subscription. The link may be expired or invalid.'}
              </p>
              <p className="text-muted-foreground">
                Please try subscribing again or contact support if the problem persists.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/newsletter">Try subscribing again</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">{t('newsletter.backHome')}</Link>
              </Button>
            </div>
          </div>
        )
    }
  }

  return (
    <Page>
      <div className="container mx-auto px-4 py-16 max-w-2xl">{renderContent()}</div>
    </Page>
  )
}

export default NewsletterConfirmPage

import type { FC } from 'react'
import { useTranslations } from 'next-intl'
import { NewsletterCard } from '@/core/components/newsletter-card/newsletter-card'
import { Page } from '@/core/components/page/page'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { ArrowLeft } from 'lucide-react'
import { Link } from '@/core/components/link/link'
import { Button } from '@/components/ui/button'

export const NewsletterSignupPage: FC = () => {
  const t = useTranslations()

  return (
    <Page>
      <div className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Link to="/newsletter">
              <Button variant="ghost">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('newsletter.backToNewsletter')}
              </Button>
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-6">
              <AccentText>{t('newsletter.signupTitle')}</AccentText>
            </h1>
            <p className="text-xl mb-6 text-muted-foreground">{t('newsletter.signupQuestion')}</p>
            <p className="text-lg mb-8 text-muted-foreground">{t('newsletter.signupDescription')}</p>
          </div>

          <div className="mb-12">
            <NewsletterCard defaultExpanded={true} />
          </div>

          <div className="text-center">
            <h2 className="text-xl font-bold mb-6">{t('newsletter.whyJoinTitle')}</h2>
            <div className="grid gap-4 text-left">
              <div>
                <h3 className="font-semibold mb-2">{t('newsletter.expertInsights')}</h3>
                <p className="text-muted-foreground text-sm">{t('newsletter.expertInsightsDesc')}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t('newsletter.exclusiveContent')}</h3>
                <p className="text-muted-foreground text-sm">{t('newsletter.exclusiveContentDesc')}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t('newsletter.communityAccess')}</h3>
                <p className="text-muted-foreground text-sm">{t('newsletter.communityAccessDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

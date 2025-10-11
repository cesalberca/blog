import type { FC } from 'react'
import { useTranslations } from 'next-intl'
import { Newsletter } from '@/core/components/newsletter/newsletter'
import { Page } from '@/core/components/page/page'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { Background } from '@/core/components/background/background'
import { Link } from '@/core/components/link/link'
import { Button } from '@/components/ui/button'
import { Calendar, ExternalLink } from 'lucide-react'

export const NewsletterPage: FC = () => {
  const t = useTranslations()
  const recentEmails: { id: string; title: string; date: string; url: string; excerpt: string }[] = []

  return (
    <Page top={true}>
      <div className="min-h-[60vh] flex items-center justify-center">
        <Background>
          <div className="max-w-4xl mx-auto px-8 py-12 mt-10">
            <div className="text-center">
              <h1 className="mb-8">
                <AccentText>{t('newsletter.title')}</AccentText>
              </h1>
              <p className="text-xl mb-4 text-muted-foreground max-w-2xl mx-auto">{t('newsletter.subtitle')}</p>
            </div>

            <div className="max-w-md mx-auto">
              <Newsletter />
            </div>
          </div>
        </Background>
      </div>

      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <AccentText>{t('newsletter.recentNewslettersTitle')}</AccentText>
            </h2>
            <p className="text-muted-foreground">{t('newsletter.recentNewslettersDescription')}</p>
          </div>

          <div className="grid gap-6">
            {recentEmails.map(email => (
              <div key={email.id} className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(email.date).toLocaleDateString()}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 flex items-start gap-2">{email.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{email.excerpt}</p>
                    <Link href={email.url}>
                      <Button variant="outline" className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        {t('newsletter.readNewsletterButton')}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Page>
  )
}

import type { FC } from 'react'
import { Newsletter } from '@/core/components/newsletter/newsletter'
import { Page } from '@/core/components/page/page'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { Background } from '@/core/components/background/background'
import { Link } from '@/core/components/link/link'
import { getNewsletters } from '@/newsletters'
import type { Locale } from '@/core/i18n/locale'
import { getTranslations } from 'next-intl/server'
import { Markdown } from '@/core/components/markdown/markdown'

export const NewslettersPage: FC<{ locale: Locale }> = async ({ locale }) => {
  const t = await getTranslations()
  const newsletters = await getNewsletters({ locale })

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

          {newsletters.map((newsletter) => (
            <Link className="min-w-min" key={newsletter.slug} href={`/newsletter/${newsletter.slug}`}>
              <div className="mb-4">
                <section className="p-4">
                  <h4 className="mb-2">{newsletter.title}</h4>

                  <Markdown className="text-muted-foreground" value={newsletter.description}></Markdown>
                </section>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Page>
  )
}

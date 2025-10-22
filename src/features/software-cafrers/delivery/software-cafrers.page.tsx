import type { FC } from 'react'
import { Page } from '@/core/components/page/page'
import { Link } from '@/core/components/link/link'
import { Section } from '@/core/components/section/section'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Testimonials } from '../components/testimonials/testimonials'
import { useTranslations } from 'next-intl'
import { Markdown } from '@/core/components/markdown/markdown'

export const SoftwareCafrersPage: FC = () => {
  const t = useTranslations('softwareCafrers')

  return (
    <Page>
      <div className="wrapper">
        <h1 className="text-4xl font-bold mb-2">
          <AccentText>{t('title')}</AccentText>
        </h1>
      </div>

      <Section>
        <div className="bleed-width-section">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="sticky top-20 pt-4">
                <div className="relative w-full  rounded-lg shadow-lg flex items-center justify-center">
                  <Image src={'/assets/images/books/cover.png'} width={720} height={1080} alt="" />
                </div>

                <div className="flex flex-col items-center gap-2 mt-6">
                  <div className="text-lg font-semibold">
                    <Markdown value={t('publishedBy')} />
                  </div>
                  <Button asChild>
                    <Link
                      className="min-w-40"
                      type="invisible"
                      href={'https://tienda.savvily.es/products/software-cafrers'}
                    >
                      {t('buyButton')}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <Section className="mt-0 md:mt-0">
                <h2 className={cn('my-6')}>
                  <AccentText>{t('synopsis.title')}</AccentText>
                </h2>
                <div className="not-prose max-w-none space-y-4">
                  <Markdown value={t('synopsis.paragraph1')} />
                  <Markdown value={t('synopsis.paragraph2')} />
                  <Markdown value={t('synopsis.paragraph3')} />
                </div>
              </Section>

              <Section>
                <h2 className={cn('my-6')}>
                  <AccentText>{t('biography.title')}</AccentText>
                </h2>
                <div className="not-prose max-w-none space-y-4">
                  <Markdown value={t('biography.paragraph1')} />
                  <Markdown value={t('biography.paragraph2')} />
                  <Markdown value={t('biography.paragraph3')} />
                </div>
              </Section>

              <Section>
                <Testimonials />
              </Section>

              <Button asChild className="block sm:hidden text-center">
                <Link type="invisible" href={'https://tienda.savvily.es/products/software-cafrers'}>
                  {t('buyButton')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </Page>
  )
}

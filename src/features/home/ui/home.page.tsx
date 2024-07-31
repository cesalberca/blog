import { type FC, type PropsWithChildren } from 'react'
import type { Article } from '../../articles/domain/article'
import { ArticleExcerpt } from './article-excerpt'
import { useTranslations } from 'next-intl'
import { Page } from '../../../core/components/page/page'
import { Technologies } from './technologies'
import { Projects } from './projects'
import { Link } from '../../../core/components/link/link'
import { Markdown } from '../../../core/components/markdown/markdown'
import { Services } from './services'
import { SocialMedia } from '@/core/components/social-media/social-media'
import { Hero } from '@/core/components/hero/hero'
import { ScrambleList } from '@/core/components/scramble-list/scramble-list'

export const Section: FC<
  PropsWithChildren<{
    title?: string
  }>
> = ({ children, title }) => {
  return (
    <section className="mt-xxl">
      {title && <h2 className="mt-m">{title}</h2>}
      {children}
    </section>
  )
}

export const HomePage: FC<{ articles: Article[] }> = ({ articles }) => {
  const t = useTranslations()

  const texts = [
    t('home.labels.architect'),
    t('home.labels.digitalNomad'),
    t('home.labels.internationalSpeaker'),
    t('home.labels.freelancer'),
    t('home.labels.podcastHost'),
  ]

  return (
    <Page>
      <Hero image="/assets/images/me.png">
        <header className="absolute left-0">
          <h2 className="uppercase">
            <ScrambleList texts={texts}></ScrambleList>
          </h2>
          <h6 className="mt-xs">{t.rich('home.heroCaption')}</h6>
          <section className="mt-xs text-xs">
            <SocialMedia />
          </section>
        </header>
      </Hero>

      <Section>
        <Markdown value={t('home.whoAmI')} />
      </Section>

      <Section title={t('home.services.title')}>
        <Services />
      </Section>

      <Section title={t('home.projects.title')}>
        <Projects />
      </Section>

      <Section title={t('home.technologies')}>
        <Technologies />
      </Section>

      <Section title={t('home.latestArticles')}>
        {articles.map(article => (
          <ArticleExcerpt key={article.id.value} excerpt={article.getExcerpt()} />
        ))}
        <Link to={'/articles'}>{t('home.viewAllArticles')}</Link>
      </Section>
    </Page>
  )
}

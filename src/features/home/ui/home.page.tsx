import type { FC, PropsWithChildren } from 'react'
import type { Article } from '../../articles/domain/article'
import { ArticleExcerpt } from './article-excerpt'
import { useTranslations } from 'next-intl'
import { Page } from '../../../core/components/page/page'
import { Hero } from '../../../core/components/hero/hero'
import { Technologies } from './technologies'
import { Projects } from './projects'
import { Link } from '../../../core/components/link/link'
import { Markdown } from '../../../core/components/markdown/markdown'
import { SocialMedia } from '../../../core/components/social-media/social-media'
import { Services } from './services'

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

  return (
    <Page>
      <Hero image="/assets/images/me.png">
        <header>
          <h1 className="uppercase">{t.rich('home.heroTitle')}</h1>
          <h6 className="mt-m">{t.rich('home.heroCaption')}</h6>
          <section className="pt-l text-xs">
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

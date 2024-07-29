import type { FC } from 'react'
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

export const HomePage: FC<{ articles: Article[] }> = ({ articles }) => {
  const t = useTranslations()

  return (
    <Page>
      <Hero image="/assets/images/me.png">
        <header>
          <h1 className="uppercase">{t.rich('home.heroTitle')}</h1>
          <h6 className="mt-2">{t.rich('home.heroCaption')}</h6>
          <section className="pt-4 text-xs">
            <SocialMedia />
          </section>
        </header>
      </Hero>

      <section>
        <Markdown value={t('home.whoAmI1')} />
        <Markdown value={t('home.whoAmI2')} />
      </section>

      <section>
        <h2>{t('home.projects.title')}</h2>
        <Projects />
      </section>

      <section>
        <h2>{t('home.technologies')}</h2>
        <Technologies />
      </section>

      <section>
        <h2>{t('home.latestArticles')}</h2>
        {articles.map(article => (
          <ArticleExcerpt key={article.id.value} excerpt={article.getExcerpt()} />
        ))}
        <Link to={'/articles'}>{t('home.viewAllArticles')}</Link>
      </section>
    </Page>
  )
}

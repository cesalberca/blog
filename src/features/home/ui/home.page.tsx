import type { FC } from 'react'
import type { Article } from '../../articles/domain/article'
import { ArticleExcerpt } from './article-excerpt'
import { useTranslations } from 'next-intl'
import { Page } from '../../../core/components/page/page'
import { Hero } from '../../../core/components/hero/hero'
import Image from 'next/image'
import { Technologies } from './technologies'
import { Projects } from './projects'
import { Link } from '../../../core/components/link/link'
import { Markdown } from '../../../core/components/markdown/markdown'

export const HomePage: FC<{ articles: Article[] }> = ({ articles }) => {
  const t = useTranslations()

  return (
    <Page>
      <Hero>
        <div>
          <header>
            <h1>{t.rich('home.heroTitle')}</h1>
            <p>{t.rich('home.heroCaption')}</p>
          </header>
          <Image priority src="/assets/images/me.png" width={500} height={500} alt={t('home.meAlt')} />
        </div>
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

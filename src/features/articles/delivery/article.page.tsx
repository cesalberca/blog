import type { FC } from 'react'
import { Hero } from '../../../core/components/hero/hero'
import { useTranslations } from 'next-intl'
import type { Article as ArticleDomain } from '../domain/article'
import { Tag } from '../../../core/components/tag/tag'
import { Markdown } from '../../../core/components/markdown/markdown'
import { Page } from '../../../core/components/page/page'
import { SocialLinks } from '../../../core/components/social-links/social-links'

export const ArticlePage: FC<{ article: ArticleDomain }> = ({ article }) => {
  const t = useTranslations()

  return (
    <Page
      focused
      topSection={
        <Hero image={article.image}>
          <h1>{article.title}</h1>
        </Hero>
      }
    >
      <article>
        <header>
          <span>{article.date.format()}</span>
          <span>—</span>
          <span>
            {article.getReadingTime().minutes} {t('common.minutes')}
          </span>
          <Tag>{article.locale}</Tag>
        </header>
        <Markdown value={article.body.value} />
        <SocialLinks body={article.getSummary()} />
      </article>
    </Page>
  )
}

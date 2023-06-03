import type { FC } from 'react'
import type { Article as ArticleDomain } from '../domain/article'
import { Page } from '../../../core/components/page/page'
import { ArticleExcerpt } from '../../home/ui/article-excerpt'

export const ArticlesPage: FC<{ articles: ArticleDomain[] }> = ({ articles }) => {
  return (
    <Page>
      {articles.map(article => (
        <ArticleExcerpt key={article.id.value} excerpt={article.getExcerpt()} />
      ))}
    </Page>
  )
}

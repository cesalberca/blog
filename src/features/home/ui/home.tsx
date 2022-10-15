import type { FC } from 'react'
import styles from './home.module.scss'
import { bind } from '../../../core/utils/bind'
import type { Article } from '../../blog/domain/articles/article'
import { ArticleExcerpt } from './article-excerpt'
import { useTranslations } from 'use-intl'

const cx = bind(styles)

export const Home: FC<{ articles: Article[] }> = ({ articles }) => {
  const t = useTranslations()

  return (
    <>
      <main>
        <div className={cx('hero')}>
          <div className={cx('wrapper')}>
            <header>
              <h1 className={cx('title')} dangerouslySetInnerHTML={{ __html: t('home_heroTitle') }}></h1>
              <p className={cx('caption')} dangerouslySetInnerHTML={{ __html: t('home_heroCaption') }}></p>
            </header>
            <img className={cx('photo')} src="me.png" alt="César Alberca" />
          </div>
        </div>
        <div>
          <h2 className={cx('articles')}>{t('home_articles')}</h2>
          {articles.map(article => (
            <ArticleExcerpt key={article.id.value} excerpt={article.getExcerpt()} />
          ))}
        </div>
      </main>
    </>
  )
}

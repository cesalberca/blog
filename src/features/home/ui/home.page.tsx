import type { FC } from 'react'
import styles from './home.page.module.scss'
import { bind } from '../../../core/utils/bind'
import type { Article } from '../../articles/domain/article'
import { ArticleExcerpt } from './article-excerpt'
import { useTranslations } from 'next-intl'

const cx = bind(styles)

export const HomePage: FC<{ articles: Article[] }> = ({ articles }) => {
  const t = useTranslations()

  return (
    <>
      <main>
        <div className={cx('hero')}>
          <div className={cx('wrapper')}>
            <header>
              <h1 className={cx('title')}>{t.rich('home.heroTitle')}</h1>
              <p className={cx('caption')}>{t.rich('home.heroCaption')}</p>
            </header>
            <img className={cx('photo')} src="me.png" alt={t('home.meAlt')} />
          </div>
        </div>
        <div>
          <h2 className={cx('articles')}>{t('home.articles')}</h2>
          {articles.map(article => (
            <ArticleExcerpt key={article.id.value} excerpt={article.getExcerpt()} />
          ))}
        </div>
      </main>
    </>
  )
}

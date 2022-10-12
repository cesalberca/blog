import type { FC } from 'react'
import styles from './home.module.scss'
import { bind } from '../../../core/utils/bind'
import type { Article } from '../../blog/domain/articles/article'
import { ArticleExcerpt } from './article-excerpt'

const cx = bind(styles)

export const Home: FC<{ articles: Article[] }> = ({ articles }) => {
  return (
    <>
      <main>
        <div className={cx('hero')}>
          <div className={cx('wrapper')}>
            <header>
              <h1 className={cx('title')}>Title</h1>
              <p className={cx('caption')}>Caption</p>
            </header>
            <img className={cx('photo')} src="ui/images/me.png" alt="César Alberca" />
          </div>
        </div>
        <div>
          <h2 className={cx('articles')}>Articles</h2>
          {articles.map(article => (
            <ArticleExcerpt key={article.id.value} excerpt={article.getExcerpt()} />
          ))}
        </div>
      </main>
    </>
  )
}

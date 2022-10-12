import type { FC } from 'react'
import styles from './article-excerpt.module.scss'
import type { Article } from '../../blog/domain/articles/article'
import { bind } from '../../../core/utils/bind'
import { Link } from '../../../core/components/link/link'

const cx = bind(styles)

export const ArticleExcerpt: FC<{ excerpt: ReturnType<Article['getExcerpt']> }> = ({ excerpt }) => {
  return (
    <Link to={`articles/${excerpt.id.value}`} type={'invisible'}>
      <article className={cx('excerpt')}>
        <h3 dangerouslySetInnerHTML={{ __html: excerpt.title }}></h3>
        <div className={cx('slugline')}>
          <span>{excerpt.date}</span>
          <span className={cx('accented-slugline')}>
            {' '}
            <strong>/</strong>{' '}
          </span>
          <span>{excerpt.readingTime.minutes} minutes</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: excerpt.body }}></div>
      </article>
    </Link>
  )
}

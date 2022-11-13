import type { FC } from 'react'
import styles from './article-excerpt.module.scss'
import type { Article } from '../../articles/domain/article'
import { bind } from '../../../core/utils/bind'
import { Link } from '../../../core/components/link/link'
import { Markdown } from '../../../core/components/markdown/markdown'
import { useTranslations } from 'next-intl'

const cx = bind(styles)

export const ArticleExcerpt: FC<{ excerpt: ReturnType<Article['getExcerpt']> }> = ({ excerpt }) => {
  const t = useTranslations()
  return (
    <Link to={`articles/${excerpt.id.value}`} type={'invisible'}>
      <article className={cx('excerpt')}>
        <h3 className={cx('title')} dangerouslySetInnerHTML={{ __html: excerpt.title }}></h3>
        <div className={cx('slugline')}>
          <span>{excerpt.date}</span>
          <span className={cx('accented-slugline')}>
            {' '}
            <strong>/</strong>{' '}
          </span>
          <span>
            {excerpt.readingTime.minutes} {t('article.minutes')}
          </span>
        </div>
        <Markdown value={excerpt.body} />
      </article>
    </Link>
  )
}

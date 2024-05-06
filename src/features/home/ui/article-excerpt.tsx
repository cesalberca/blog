import type { FC } from 'react'
import type { Article } from '../../articles/domain/article'
import { Link } from '../../../core/components/link/link'
import { Markdown } from '../../../core/components/markdown/markdown'
import { useTranslations } from 'next-intl'

export const ArticleExcerpt: FC<{ excerpt: ReturnType<Article['getExcerpt']> }> = ({ excerpt }) => {
  const t = useTranslations()
  return (
    <Link to={`articles/${excerpt.id.value}`} type={'invisible'}>
      <article className={'excerpt'}>
        <h3 className={'title'} dangerouslySetInnerHTML={{ __html: excerpt.title }}></h3>
        <div className={'slugline'}>
          <span>{excerpt.date}</span>
          <span className={'accented-slugline'}>
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

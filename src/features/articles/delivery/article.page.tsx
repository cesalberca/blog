import type { FC } from 'react'
import styles from './article.page.module.scss'
import { Hero } from '../../../core/components/hero/hero'
import { bind } from '../../../core/utils/bind'
import { useTranslations } from 'next-intl'
import type { Article as ArticleDomain } from '../domain/article'
import { Tag } from '../../../core/components/tag/tag'
import { Markdown } from '../../../core/components/markdown/markdown'
import { SocialLinks } from '../../../core/components/social-links/social-links'

const cx = bind(styles)

export const ArticlePage: FC<{ article: ArticleDomain }> = ({ article }) => {
  const t = useTranslations()

  return (
    <article className={cx('article')}>
      <Hero image={article.image} />
      <h1 className={cx('title')}>{article.title}</h1>
      <header className={cx('header')}>
        <span className={cx('date')}>{article.date.format()}</span>
        <span className={cx('dash')}>—</span>
        <span className={cx('time')}>
          {article.getReadingTime().minutes} {t('common.minutes')}
        </span>
        <Tag>{article.locale}</Tag>
      </header>
      <Markdown value={article.body.value} />
      <SocialLinks body={article.getSummary()} />
    </article>
  )
}

import type { FC } from 'react'
import styles from './article.module.scss'
import { Hero } from '../../../../core/components/hero/hero'
import { bind } from '../../../../core/utils/bind'
import { useTranslations } from 'use-intl'
import type { Article as ArticleDomain } from '../../domain/articles/article'
import { Tag } from '../../../../core/components/tag/tag'
import { Markdown } from '../../../../core/components/markdown/markdown'
import { SocialLinks } from '../../../../core/components/social-links/social-links'

const cx = bind(styles)

export const Article: FC<{ article: ArticleDomain }> = ({ article }) => {
  const t = useTranslations()

  return (
    <article className={cx('article')}>
      <Hero image={article.image} />
      <h1 className={cx('title')}>{article.title}</h1>
      <header className={cx('header')}>
        <span className={cx('date')}>{article.date.format()}</span>
        <span className={cx('dash')}>—</span>
        <span className={cx('time')}>
          {article.getReadingTime().minutes} {t('_minutes')}
        </span>
        <Tag>{article.locale}</Tag>
      </header>
      <Markdown value={article.body.value} />
      <SocialLinks body={article.getSummary()} />
    </article>
  )
}

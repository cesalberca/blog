import type { FC } from 'react'
import styles from './home.page.module.scss'
import { bind } from '../../../core/utils/bind'
import type { Article } from '../../articles/domain/article'
import { ArticleExcerpt } from './article-excerpt'
import { useTranslations } from 'next-intl'
import { Page } from '../../../core/components/page/page'
import { Hero } from '../../../core/components/hero/hero'
import Image from 'next/image'
import me from '../../../../public/assets/images/me.png'

const cx = bind(styles)

export const HomePage: FC<{ articles: Article[] }> = ({ articles }) => {
  const t = useTranslations()

  return (
    <Page
      topSection={
        <Hero className={cx('hero')}>
          <div className={cx('wrapper')}>
            <header>
              <h1 className={cx('title')}>{t.rich('home.heroTitle')}</h1>
              <p className={cx('caption')}>{t.rich('home.heroCaption')}</p>
            </header>
            <Image priority className={cx('photo')} src={me} alt={t('home.meAlt')} />
          </div>
        </Hero>
      }
    >
      <div>
        <h2 className={cx('articles')}>{t('home.articles')}</h2>
        {articles.map(article => (
          <ArticleExcerpt key={article.id.value} excerpt={article.getExcerpt()} />
        ))}
      </div>
    </Page>
  )
}
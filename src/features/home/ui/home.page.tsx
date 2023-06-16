import type { FC } from 'react'
import { bind } from '../../../core/utils/bind'
import type { Article } from '../../articles/domain/article'
import { ArticleExcerpt } from './article-excerpt'
import { useTranslations } from 'next-intl'
import { Page } from '../../../core/components/page/page'
import { Hero } from '../../../core/components/hero/hero'
import Image from 'next/image'
import me from '../../../../public/assets/images/me.png'
import { Technologies } from './technologies'
import { Projects } from './projects'
import { Link } from '../../../core/components/link/link'
import styles from './home.page.module.scss'
import { Markdown } from '../../../core/components/markdown/markdown'

const cx = bind(styles)

export const HomePage: FC<{ articles: Article[] }> = ({ articles }) => {
  const t = useTranslations()

  return (
    <Page
      topSection={
        <Hero className={cx('home__hero')}>
          <div className={cx('home__hero__wrapper')}>
            <header>
              <h1 className={cx('home__hero__wrapper__title')}>{t.rich('home.heroTitle')}</h1>
              <p className={cx('home__hero__wrapper__caption')}>{t.rich('home.heroCaption')}</p>
            </header>
            <Image priority className={cx('home__hero__wrapper__photo')} src={me} alt={t('home.meAlt')} />
          </div>
        </Hero>
      }
    >
      <section className={cx('home__section')}>
        <Markdown value={t('home.whoAmI1')} />
        <p>{t('home.whoAmI2')}</p>
      </section>

      <section className={cx('home__section')}>
        <h2>{t('home.projects.title')}</h2>
        <Projects />
      </section>

      <section className={cx('home__section')}>
        <h2>{t('home.technologies')}</h2>
        <Technologies />
      </section>

      <section className={cx('home__section', 'home__articles')}>
        <h2 className={cx('home__articles__title')}>{t('home.latestArticles')}</h2>
        {articles.map(article => (
          <ArticleExcerpt key={article.id.value} excerpt={article.getExcerpt()} />
        ))}
        <Link className={cx('home__articles__view-all')} to={'/articles'}>
          {t('home.viewAllArticles')}
        </Link>
      </section>
    </Page>
  )
}

import type { FC } from 'react'
import styles from './footer.module.scss'
import { bind } from '../../utils/bind'
import { Links } from '../links/links'
import { Direction } from '../../types/direction'
import { Datetime } from '../../datetime'
import { Link } from '../link/link'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'

const cx = bind(styles)

export const Footer: FC = () => {
  const t = useTranslations()
  const { locale, locales, route, push } = useRouter()

  const currentYear = Datetime.fromNow().year
  const coverage = 90.95

  return (
    <footer className={cx('footer')}>
      <div className={cx('wrapper')}>
        <Links direction={Direction.VERTICAL} />
        <select value={locale} onChange={event => push(route, undefined, { locale: event.target.value })}>
          {locales?.map(x => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}
        </select>
        <section className={cx('info')}>
          <small className={cx('copy')}>
            {t('footer.madeWith', { currentYear })}
            <Link to="https://www.typescriptlang.org/">TypeScript</Link>,
            <Link to="https://wikipedia.org/wiki/SOLID">SOLID</Link> {t('footer.and')}
            <Link to="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html">
              Clean Architecture
            </Link>
            .
          </small>
          <small className={cx('coverage')}>
            {t('footer.coverage')}
            <span className={cx('coverage-percentage')}></span> {coverage}%
          </small>
        </section>
      </div>
    </footer>
  )
}

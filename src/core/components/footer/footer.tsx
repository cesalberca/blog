import { FC } from 'react'
import styles from './footer.module.scss'
import { bind } from '../../utils/bind'
import { Links } from '../links/links'
import { Direction } from '../../../features/blog/ui/components/direction'
import { Datetime } from '../../../features/blog/domain/datetime'
import { Link } from '../link/link'

const cx = bind(styles)

export const Footer: FC = () => {
  const currentYear = Datetime.fromNow().year
  const coverage = 90.95

  return (
    <footer className={cx('footer')}>
      <div className={cx('wrapper')}>
        <Links direction={Direction.VERTICAL} />
        <section className={cx('info')}>
          <small className={cx('copy')}>
            © {currentYear} ‒ Made with
            <Link to="https://www.typescriptlang.org/">TypeScript</Link>,
            <Link to="https://wikipedia.org/wiki/SOLID">SOLID</Link> and
            <Link to="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html">
              Clean Architecture
            </Link>
            .
          </small>
          <small className={cx('coverage')}>
            Coverage of
            <span className="coverage-percentage"></span>
            {coverage}%
          </small>
        </section>
      </div>
    </footer>
  )
}

import { FC, useState } from 'react'
import styles from './navbar.module.scss'
import { bind } from '../../utils/bind'
import { Options } from '../options/options'
import { Link } from '../link/link'
import { useTranslations } from 'next-intl'

const cx = bind(styles)

const Links = () => {
  const t = useTranslations()
  return (
    <>
      <Link to={'/'} className={cx('home')} type={'navigation'}>
        <strong>{t('home.title')}</strong>
      </Link>
      <div className={cx('inner-links')}>
        <Link to={'/talks'} className={cx('link')} type={'navigation'}>
          {t('talks.title')}
        </Link>
        <Link to={'/about'} className={cx('link')} type={'navigation'}>
          {t('about.title')}
        </Link>
      </div>
    </>
  )
}

export const Navbar: FC = () => {
  const [isActive, setIsActive] = useState(false)
  const t = useTranslations()

  return (
    <header className={cx('navbar')}>
      <nav className={cx('mobile-navigation')}>
        <button
          type="button"
          aria-label="Menu"
          className={cx({ hamburger: true, 'is-active': isActive })}
          onClick={() => setIsActive(x => !x)}
        >
          <span className={cx('hamburger-box')}>
            <span className={cx('hamburger-inner')}></span>
          </span>
        </button>

        <div className={cx('options')}>
          <Options />
        </div>

        <div className={cx({ backdrop: true, 'has-backdrop': isActive })}>
          <div className={cx('links')}>
            <Link to={'/'} type={'navigation'}>
              <strong>{t('home.title')}</strong>
            </Link>
            <Link to={'/talks'} className={cx('link')} type={'navigation'}>
              {t('talks.title')}
            </Link>
            <Link to={'/about'} className={cx('link')} type={'navigation'}>
              {t('about.title')}
            </Link>
          </div>
        </div>
        <div className={cx({ veil: true, 'show-veil': isActive })} onClick={() => setIsActive(false)}></div>
      </nav>

      <nav className={cx('desktop-navigation')}>
        <div className={cx('wrapper')}>
          <Links />
          <Options />
        </div>
      </nav>
    </header>
  )
}

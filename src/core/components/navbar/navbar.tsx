import type { FC } from 'react'
import { Link } from '../link/link'
import { useTranslations } from 'next-intl'

const Links = () => {
  const t = useTranslations()
  return (
    <>
      <Link to={'/'} type={'navigation'}>
        <strong>{t('home.title')}</strong>
      </Link>
      <div>
        <Link to={'/talks'} type={'navigation'}>
          {t('talks.title')}
        </Link>
        <Link to={'/about'} type={'navigation'}>
          {t('about.title')}
        </Link>
      </div>
    </>
  )
}

export const Navbar: FC = () => {
  const t = useTranslations()

  return (
    <header>
      <nav>
        <button type="button" aria-label="Menu">
          <span>
            <span></span>
          </span>
        </button>

        <div>
          <div>
            <Link to={'/'} type={'navigation'}>
              <strong>{t('home.title')}</strong>
            </Link>
            <Link to={'/talks'} type={'navigation'}>
              {t('talks.title')}
            </Link>
            <Link to={'/about'} type={'navigation'}>
              {t('about.title')}
            </Link>
          </div>
        </div>
      </nav>

      <nav>
        <div>
          <Links />
        </div>
      </nav>
    </header>
  )
}

import { FC, useState } from 'react'
import { Options } from '../options/options'
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
  const [_isActive, setIsActive] = useState(false)
  const t = useTranslations()

  return (
    <header>
      <nav>
        <button
          type="button"
          aria-label="Menu"
          onClick={() => setIsActive(x => !x)}
        >
          <span>
            <span></span>
          </span>
        </button>

        <div>
          <Options />
        </div>

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
        <div onClick={() => setIsActive(false)}></div>
      </nav>

      <nav >
        <div >
          <Links />
          <Options />
        </div>
      </nav>
    </header>
  )
}

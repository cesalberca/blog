import type { FC } from 'react'
import { Link } from '../link/link'
import { useTranslations } from 'next-intl'

const ArrowIcon: FC = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
      fill="currentColor"
    />
  </svg>
)

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
    <header className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6">
      <Link to={'/'} className="flex items-center gap-2">
        <img src="/logo.svg" width={32} height={32} alt="Logo" className="h-6 w-6" />
        <span className="text-lg font-semibold">{t('home.title')}</span>
      </Link>
      <nav className="hidden lg:flex items-center gap-4">
        <Link to={'/'} className="text-sm font-medium text-muted-foreground hover:text-foreground">
          {t('home.title')}
        </Link>
        <Link to={'/talks'} className="text-sm font-medium text-muted-foreground hover:text-foreground">
          {t('talks.title')}
        </Link>
        <Link to={'/about'} className="text-sm font-medium text-muted-foreground hover:text-foreground">
          {t('about.title')}
        </Link>
      </nav>
      <div className="ml-auto lg:hidden">
        <button>
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>
    </header>
  )
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

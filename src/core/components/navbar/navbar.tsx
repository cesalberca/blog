import type { FC, SVGProps } from 'react'
import { Link } from '../link/link'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/core/components/theme/theme-toggle'

export const Navbar: FC<{
  className?: string
}> = ({ className }) => {
  const t = useTranslations()

  return (
    <header className={cn('flex h-16 w-full items-center justify-between bg-background px-4 md:px-6', className)}>
      <Link to={'/'} className="flex items-center gap-2">
        <img src="/assets/logo.svg" width={32} height={32} alt={t('common.logo')} className="h-6 w-6" />
        <span className="text-lg font-semibold">{t('home.title')}</span>
      </Link>
      <nav className="hidden lg:flex items-center gap-4">
        <Link to={'/talks'} className="text-sm font-medium text-muted-foreground hover:text-foreground">
          {t('talks.title')}
        </Link>
        <Link to={'/about'} className="text-sm font-medium text-muted-foreground hover:text-foreground">
          {t('about.title')}
        </Link>
      </nav>
      <div>
        <ThemeToggle />
      </div>
      <div className="ml-auto lg:hidden">
        <button>
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">{t('common.toggleNavigation')}</span>
        </button>
      </div>
    </header>
  )
}

function MenuIcon(props: SVGProps<SVGElement>) {
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

import type { FC } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { NavLink } from '@/core/components/nav-link/nav-link'
import LocaleSwitcher from '@/core/components/locale-switcher/locale-switcher'
import { Locale } from '@/core/i18n/locale'
import { ChevronDown, Menu } from 'lucide-react'

const MainLinks = () => {
  const t = useTranslations()

  return (
    <>
      <NavLink to={'/talks'}>{t('talks.title')}</NavLink>
      <NavLink to={'/experience'}>{t('experience.title')}</NavLink>
      <NavLink to={'/blog'}>{t('blog.title')}</NavLink>
      <NavLink to={'/#contact'}>{t('home.contact.title')}</NavLink>
    </>
  )
}

const MoreLinks = () => {
  const t = useTranslations()

  return (
    <>
      <NavLink type="menu" to={'/#projects'}>
        {t('home.projects.title')}
      </NavLink>
      <NavLink type="menu" to={'/#services'}>
        {t('home.services.title')}
      </NavLink>
      <NavLink type="menu" to={'/#testimonials'}>
        {t('home.testimonials.title')}
      </NavLink>
    </>
  )
}

export const Navbar: FC<{
  className?: string
}> = ({ className }) => {
  const t = useTranslations()
  const locale = useLocale() as Locale

  return (
    <header
      className={cn('flex backdrop-blur fixed z-20 h-16 w-full items-center justify-between px-4 md:px-6', className)}
    >
      <Link href={'/'} className="flex items-center gap-2">
        <Image src="/assets/logo.svg" width={32} height={32} alt={t('common.logo')} className="h-6 w-6" />
        <span className="text-lg font-semibold">{t('home.title')}</span>
      </Link>
      <nav className="hidden lg:flex items-center justify-end gap-4">
        <MainLinks />
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="p-1">
              <span>{t('common.more')}</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-40">
            <div className="flex flex-col gap-2">
              <MoreLinks />
            </div>
          </PopoverContent>
        </Popover>
        <LocaleSwitcher locale={locale} />
      </nav>
      <div className="flex gap-2 items-center lg:hidden">
        <LocaleSwitcher locale={locale} />
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">{t('common.toggleNavigation')}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 mr-4">
            <div className="flex flex-col gap-2">
              <MainLinks />
              <MoreLinks />
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  )
}

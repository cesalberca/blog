import type { FC } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { NavLink } from '@/core/components/nav-link/nav-link'
import LocaleSwitcher from '@/core/components/locale-switcher/locale-switcher'
import { Locale } from '@/core/i18n/locale'
import { ChevronDown, Menu } from 'lucide-react'
import { Link } from '@/core/components/link/link'
import { CASE_STUDY_URLS } from '@/core/i18n/paths'
import { RichText } from '@/core/components/rich-text/rich-text'

const MainLinks = () => {
  const t = useTranslations()
  const locale = useLocale() as Locale

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="p-1">
            <span>{t('caseStudies.title')}</span>
            <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          <div className="flex flex-col gap-3">
            <div>
              <NavLink type="menu" href={CASE_STUDY_URLS[locale].tabaiba}>
                {t('caseStudies.tabaiba.title')}
                <RichText className="pl-2 text-xs text-muted-foreground leading-snug">
                  {tags => t.rich('caseStudies.tabaiba.description', tags)}
                </RichText>
              </NavLink>
            </div>
            <div>
              <NavLink type="menu" href={CASE_STUDY_URLS[locale].halioooo}>
                {t('caseStudies.halioooo.title')}
                <RichText className="pl-2 text-xs text-muted-foreground leading-snug">
                  {tags => t.rich('caseStudies.halioooo.description', tags)}
                </RichText>
              </NavLink>
            </div>
            <div>
              <NavLink type="menu" href={CASE_STUDY_URLS[locale].lightspace}>
                {t('caseStudies.lightspace.title')}
                <RichText className="pl-2 text-xs text-muted-foreground leading-snug">
                  {tags => t.rich('caseStudies.lightspace.description', tags)}
                </RichText>
              </NavLink>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <NavLink href={'/services'}>{t('home.services.title')}</NavLink>
      <NavLink href={'/blog'}>{t('blog.title')}</NavLink>
      <NavLink href={'/#contact'}>{t('home.contact.title')}</NavLink>
    </>
  )
}

const MoreLinks = () => {
  const t = useTranslations()

  return (
    <>
      <NavLink type="menu" href={'/#projects'}>
        {t('home.projects.title')}
      </NavLink>
      <NavLink type="menu" href={'/#testimonials'}>
        {t('home.testimonials.title')}
      </NavLink>
      <NavLink type="menu" href={'/talks'}>
        {t('talks.title')}
      </NavLink>
      <NavLink type="menu" href={'/experience'}>
        {t('experience.title')}
      </NavLink>
      <NavLink type="menu" href={'/newsletter'}>
        {t('newsletter.navbarTitle')}
      </NavLink>
      <NavLink type="menu" href={'/photography'}>
        {t('photography.title')}
      </NavLink>
      <NavLink type="menu" href={'/links'}>
        {t('links.title')}
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
      <Link type="invisible" href={'/'} className="flex items-center gap-2">
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

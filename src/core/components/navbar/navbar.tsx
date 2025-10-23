'use client'

import { type FC, useEffect, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import LocaleSwitcher from '@/core/components/locale-switcher/locale-switcher'
import { Locale } from '@/core/i18n/locale'
import { Link } from '@/core/components/link/link'
import { BookAnnouncementBanner } from '@/core/components/banner/book-announcement-banner'
import { getLocalStorage } from '@/core/utils/local-storage'
import { useIsMobile } from '@/core/hooks/use-mobile'
import { MobileMenu } from '@/core/components/mobile-menu/mobile-menu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { cva } from 'class-variance-authority'
import { SecondaryCard } from '@/core/components/secondary-card/secondary-card'
import { StatusText } from '@/core/components/status-text/status-text'

const navStyle = cva('text-xs text-muted-foreground hover:text-foreground inline')
const navMenuContent = cva('grid grid-cols-5 p-3 md:w-[300px] lg:w-[540px]')
const navMenuList = cva('flex flex-col gap-2 p-3')

export const Navbar: FC<{
  className?: string
}> = ({ className }) => {
  const t = useTranslations()
  const locale = useLocale() as Locale
  const isMobile = useIsMobile()
  const [isBannerDismissed, setIsBannerDismissed] = useState<boolean>(true)

  useEffect(() => {
    const bannerDismissed = getLocalStorage('bookAnnouncementBannerDismissed')
    setIsBannerDismissed(!!bannerDismissed)
  }, [])

  if (isMobile) {
    return (
      <div>
        <BookAnnouncementBanner onClose={() => setIsBannerDismissed(true)} />
        <header
          className={cn(
            'flex backdrop-blur fixed z-20 h-16 w-full items-center justify-between px-4 transition-all duration-300 border-b border-border',
            { 'top-[40px]': !isBannerDismissed },
            { 'top-0': isBannerDismissed },
            className,
          )}
        >
          <Link type="invisible" href={'/'} className="flex items-center gap-2">
            <Image src="/assets/logo.svg" width={32} height={32} alt={t('common.logo')} className="h-6 w-6" />
            <span className="text-lg font-semibold">{t('home.title')}</span>
          </Link>
          <MobileMenu />
        </header>
      </div>
    )
  }

  return (
    <div>
      <BookAnnouncementBanner onClose={() => setIsBannerDismissed(true)} />
      <header
        className={cn(
          'flex backdrop-blur fixed z-20 h-16 w-full items-center justify-between px-4 md:px-6 transition-all duration-300',
          { 'top-[40px]': !isBannerDismissed },
          { 'top-0': isBannerDismissed },
          className,
        )}
      >
        <Link type="invisible" href={'/'} className="flex items-center gap-2">
          <Image src="/assets/logo.svg" width={32} height={32} alt={t('common.logo')} className="h-6 w-6" />
          <span className="text-lg font-semibold">{t('home.title')}</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex-wrap">
            <NavigationMenuItem>
              <NavigationMenuTrigger>{t('navbar.workWithMe')}</NavigationMenuTrigger>
              <NavigationMenuContent className={navMenuContent()}>
                <ul className={cn(navMenuList(), 'col-span-2')}>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link className={navStyle()} type="invisible" href={'/services'}>
                        {t('home.services.title')}
                      </Link>
                    </NavigationMenuLink>
                  </li>

                  <li>
                    <NavigationMenuLink asChild>
                      <Link className={navStyle()} type="invisible" href={'/#testimonials'}>
                        {t('home.testimonials.title')}
                      </Link>
                    </NavigationMenuLink>
                  </li>

                  <li>
                    <NavigationMenuLink asChild>
                      <Link className={navStyle()} type="invisible" href="/experience">
                        {t('experience.title')}
                      </Link>
                    </NavigationMenuLink>
                  </li>

                  <li>
                    <NavigationMenuLink asChild>
                      <Link className={navStyle()} type="invisible" href="/case-studies">
                        {t('caseStudies.title')}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 col-span-3">
                  <SecondaryCard title={t('home.contact.cta')} href="/#contact" />
                  <SecondaryCard
                    title={t('caseStudies.ctaLatest')}
                    href="/case-studies/halioooo-design-system-architecture-library"
                  />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{t('navbar.content')}</NavigationMenuTrigger>
              <NavigationMenuContent className={navMenuContent()}>
                <ul className={cn(navMenuList(), 'col-span-2')}>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link className={navStyle()} type="invisible" href={'/blog'}>
                        {t('blog.title')}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link className={navStyle()} type="invisible" href="/talks">
                        {t('talks.title')}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link className={navStyle()} type="invisible" href="/software-cafrers">
                        {t('books.title')}
                        <StatusText type="new"></StatusText>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link className={navStyle()} type="invisible" href="/newsletter">
                        {t('newsletter.navbarTitle')}
                        <StatusText type="soon"></StatusText>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <p className={navStyle()}>
                        {t('courses.title')}
                        <StatusText type="soon"></StatusText>
                      </p>
                    </NavigationMenuLink>
                  </li>
                </ul>
                <div className="flex gap-2 col-span-3">
                  <SecondaryCard title={t('blog.ctaLatest')} href="/blog/latest" className="flex-1" />
                  <SecondaryCard title={t('newsletter.ctaLatest')} href="/newsletter" className="flex-1" />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{t('navbar.about')}</NavigationMenuTrigger>
              <NavigationMenuContent className={navMenuContent()}>
                <ul className={cn(navMenuList(), 'col-span-2')}>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link className={navStyle()} type="invisible" href={'/photography'}>
                        {t('photography.title')}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <p className={navStyle()}>
                        {t('about.title')}
                        <StatusText type="soon"></StatusText>
                      </p>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link className={navStyle()} type="invisible" href={'/links'}>
                        {t('links.title')}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
                <div className="col-span-3">
                  <SecondaryCard title={t('home.contact.cta')} href="/#contact" />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <LocaleSwitcher locale={locale} />
      </header>
    </div>
  )
}

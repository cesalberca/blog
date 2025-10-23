'use client'

import { type FC, useEffect, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import LocaleSwitcher from '@/core/components/locale-switcher/locale-switcher'
import { Locale } from '@/core/i18n/locale'
import { Link } from '@/core/components/link/link'
import { CASE_STUDY_URLS } from '@/core/i18n/paths'
import { RichText } from '@/core/components/rich-text/rich-text'
import { BookAnnouncementBanner } from '@/core/components/banner/book-announcement-banner'
import { getLocalStorage } from '@/core/utils/local-storage'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Card, CardHeader } from '@/components/ui/card'
import { cva } from 'class-variance-authority'

const navStyle = cva('text-xs text-muted-foreground hover:text-foreground')

export const Navbar: FC<{
  className?: string
}> = ({ className }) => {
  const t = useTranslations()
  const locale = useLocale() as Locale
  const [isBannerDismissed, setIsBannerDismissed] = useState<boolean>(true)

  useEffect(() => {
    const bannerDismissed = getLocalStorage('bookAnnouncementBannerDismissed')
    setIsBannerDismissed(!!bannerDismissed)
  }, [])

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
              <NavigationMenuTrigger>Work with me</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
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
                        Experience
                      </Link>
                    </NavigationMenuLink>
                  </li>

                  <li>
                    <NavigationMenuLink asChild>
                      <Link className={navStyle()} type="invisible" href="/case-studies">
                        Case Studies
                      </Link>
                    </NavigationMenuLink>
                  </li>

                  <li>
                    <NavigationMenuLink asChild>
                      <Link href={CASE_STUDY_URLS[locale].tabaiba}>
                        <div className="text-sm font-medium leading-none">{t('caseStudies.tabaiba.title')}</div>
                        <RichText className="text-xs text-muted-foreground leading-snug">
                          {tags => t.rich('caseStudies.tabaiba.description', tags)}
                        </RichText>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href={CASE_STUDY_URLS[locale].halioooo}>
                        <div className="text-sm font-medium leading-none">{t('caseStudies.halioooo.title')}</div>
                        <RichText className="text-xs text-muted-foreground leading-snug">
                          {tags => t.rich('caseStudies.halioooo.description', tags)}
                        </RichText>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href={CASE_STUDY_URLS[locale].lightspace}>
                        <div className="text-sm font-medium leading-none">{t('caseStudies.lightspace.title')}</div>
                        <RichText className="text-xs text-muted-foreground leading-snug">
                          {tags => t.rich('caseStudies.lightspace.description', tags)}
                        </RichText>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Content</NavigationMenuTrigger>
              <NavigationMenuContent className="flex md:w-[400px] lg:w-[500px] gap-8 p-6">
                <ul className="flex flex-col gap-3">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link className={navStyle()} type="invisible" href={'/blog'}>
                        {t('blog.title')}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link className={navStyle()} type="invisible" href="/software-cafrers">
                        Books
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link className={navStyle()} type="invisible" href="/software-cafrers">
                        Talks
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link className={navStyle()} type="invisible" href="/software-cafrers">
                        Courses
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link className={navStyle()} type="invisible" href="/software-cafrers">
                        Newsletter
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
                <div className="flex gap-2">
                  <Card>
                    <CardHeader>Read latest blogpost</CardHeader>{' '}
                  </Card>
                  <Card>
                    <CardHeader>Read latest newsletter</CardHeader>{' '}
                  </Card>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link className={navStyle()} type="invisible" href={'/talks'}>
                        Photography
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link className={navStyle()} type="invisible" href={'/experience'}>
                        About me
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link className={navStyle()} type="invisible" href={'/experience'}>
                        Links
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link className={navStyle()} type="invisible" href={'/newsletter'}>
                        Contact
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <LocaleSwitcher locale={locale} />
      </header>
    </div>
  )
}

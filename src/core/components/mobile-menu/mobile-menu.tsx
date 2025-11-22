'use client'

import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { X, Menu, ChevronRight, ChevronLeft } from 'lucide-react'
import { Link } from '@/core/components/link/link'
import { SecondaryCard } from '@/core/components/secondary-card/secondary-card'
import Image from 'next/image'
import LocaleSwitcher from '@/core/components/locale-switcher/locale-switcher'
import type { Locale } from '@/core/i18n/locale'

interface MenuItem {
  label: string
  href?: string
  items?: { label: string; href: string }[]
  secondaryCards?: { title: string; href: string; className?: string }[]
}

export const MobileMenu = () => {
  const t = useTranslations()
  const locale = useLocale() as Locale
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  const menuItems: MenuItem[] = [
    {
      label: t('navbar.workWithMe'),
      items: [
        { label: t('home.services.title'), href: '/services' },
        { label: t('home.testimonials.title'), href: '/#testimonials' },
        { label: t('experience.title'), href: '/experience' },
        { label: t('caseStudies.title'), href: '/case-studies' },
      ],
      secondaryCards: [
        { title: t('home.contact.cta'), href: '/#contact' },
        { title: t('caseStudies.ctaLatest'), href: '/case-studies/halioooo-design-system-architecture-library' },
      ],
    },
    {
      label: t('navbar.content'),
      items: [
        { label: t('blog.title'), href: '/blog' },
        { label: t('talks.title'), href: '/talks' },
        { label: t('books.title'), href: '/software-cafrers' },
        { label: t('newsletter.navbarTitle'), href: '/newsletter' },
      ],
      secondaryCards: [
        { title: t('blog.ctaLatest'), href: '/blog/latest' },
        { title: t('newsletter.ctaLatest'), href: '/newsletter' },
      ],
    },
    {
      label: t('navbar.about'),
      items: [
        { label: t('photography.title'), href: '/photography' },
        { label: t('links.title'), href: '/links' },
      ],
      secondaryCards: [{ title: t('home.contact.cta'), href: '/#contact' }],
    },
  ]

  const handleClose = () => {
    setIsOpen(false)
    setActiveSubmenu(null)
  }

  const handleBack = () => {
    setActiveSubmenu(null)
  }

  const handleMenuItemClick = (label: string) => {
    setActiveSubmenu(label)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label={t('common.openMenu')}>
          <Menu className="h-5 w-5" />
        </Button>
      </DialogTrigger>

      <DialogContent className="h-full max-w-full p-0 border-0 bg-background [&>button]:hidden">
        <DialogHeader className="sr-only">
          <DialogTitle>{t('common.toggleNavigation')}</DialogTitle>
          <DialogDescription>{t('common.toggleNavigation')}</DialogDescription>
        </DialogHeader>
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border px-4 py-4">
            {activeSubmenu ? (
              <Button variant="ghost" size="icon" onClick={handleBack} aria-label={t('common.goBack')}>
                <ChevronLeft className="h-5 w-5" />
              </Button>
            ) : (
              <div className="flex items-center gap-2">
                <Image src="/assets/logo.svg" width={32} height={32} alt={t('common.logo')} className="h-6 w-6" />
                <span className="text-lg font-semibold text-foreground">{t('home.title')}</span>
              </div>
            )}
            <Button variant="ghost" size="icon" onClick={handleClose} aria-label={t('common.closeMenu')}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col">
            {!activeSubmenu ? (
              <>
                {/* Menu Items */}
                <nav className="space-y-1 flex-1">
                  {menuItems.map(item => (
                    <button
                      key={item.label}
                      onClick={() => handleMenuItemClick(item.label)}
                      className="flex w-full items-center justify-between border-b border-border py-4 text-left text-sm text-foreground transition-colors hover:text-muted-foreground"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  ))}
                </nav>

                {/* Language Switcher */}
                <div className="mt-8 border-t border-border pt-6">
                  <div className="flex flex-col items-center space-y-4">
                    <span className="text-sm font-medium text-muted-foreground">{t('common.language')}</span>
                    <LocaleSwitcher locale={locale} />
                  </div>
                </div>
              </>
            ) : (
              // Submenu
              <div className="space-y-6">
                {/* Secondary Cards */}
                {menuItems.find(item => item.label === activeSubmenu)?.secondaryCards && (
                  <div className="flex w-full min-h-[300px] gap-2">
                    {menuItems
                      .find(item => item.label === activeSubmenu)
                      ?.secondaryCards?.map((card) => (
                        <SecondaryCard
                          key={card.href}
                          title={card.title}
                          href={card.href}
                          className="flex-1"
                          onClick={handleClose}
                        />
                      ))}
                  </div>
                )}

                {/* Menu Links */}
                <nav className="space-y-1">
                  {menuItems
                    .find(item => item.label === activeSubmenu)
                    ?.items?.map(subItem => (
                      <div key={subItem.label} className="border-b border-border py-4">
                        <Link
                          href={subItem.href}
                          type="invisible"
                          className="block text-sm text-foreground transition-colors hover:text-muted-foreground"
                          onClick={handleClose}
                        >
                          {subItem.label}
                        </Link>
                      </div>
                    ))}
                </nav>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

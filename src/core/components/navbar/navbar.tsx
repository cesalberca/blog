import type { FC, SVGProps } from 'react'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { NavLink } from '@/core/components/nav-link/nav-link'

const Links = () => {
  const t = useTranslations()
  return (
    <>
      <NavLink to={'#projects'}>{t('home.projects.title')}</NavLink>
      <NavLink to={'#services'}>{t('home.services.title')}</NavLink>
      <NavLink to={'#experience'}>{t('home.experience.title')}</NavLink>
      <NavLink to={'/blog'}>{t('blog.title')}</NavLink>
      <NavLink to={'/talks'}>{t('talks.title')}</NavLink>
      <NavLink to={'#testimonials'}>{t('home.testimonials.title')}</NavLink>
      <NavLink to={'#contact'}>{t('home.contact.title')}</NavLink>
    </>
  )
}

export const Navbar: FC<{
  className?: string
}> = ({ className }) => {
  const t = useTranslations()

  return (
    <header
      className={cn('flex backdrop-blur fixed z-20 h-16 w-full items-center justify-between px-4 md:px-6', className)}
    >
      <Link href={'/'} className="flex items-center gap-2">
        <Image src="/assets/logo.svg" width={32} height={32} alt={t('common.logo')} className="h-6 w-6" />
        <span className="text-lg">{t('home.title')}</span>
      </Link>
      <nav className="hidden lg:flex -ml-[155px] items-center justify-end gap-4">
        <Links></Links>
      </nav>
      <div className="flex gap-2 items-center">
        <div className="ml-auto lg:hidden">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">{t('common.toggleNavigation')}</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-40 mx-m">
              <div className="flex flex-col gap-m w-min">
                <Links></Links>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  )
}

function MenuIcon(props: SVGProps<SVGSVGElement>) {
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

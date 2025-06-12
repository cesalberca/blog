'use client'

import { useTransition } from 'react'
import { Check, ChevronDown, Globe } from 'lucide-react'
import { Locale } from '@/core/i18n/locale'
import { usePathname, useRouter } from '@/core/i18n/routing'
import { locales } from '@/core/i18n/locales'
import { localeNames } from '@/core/i18n/locale-names'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { useParams } from 'next/navigation'

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const router = useRouter()
  const params = useParams()
  const [isPending, startTransition] = useTransition()
  const t = useTranslations('common')

  const changeLocale = (newLocale: Locale) => {
    startTransition(() => {
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      router.replace({ pathname, params }, { locale: newLocale })
    })
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild disabled={isPending}>
        <Button variant="outline" className="justify-between min-w-[4rem]" aria-label={t('switchLanguage')}>
          <Globe className="mr-2 h-5 w-5" />
          <ChevronDown className="ml-auto h-5 w-5 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        {locales.map(loc => (
          <DropdownMenuItem
            key={loc}
            disabled={isPending}
            onClick={() => changeLocale(loc)}
            className={cn(
              'cursor-pointer py-3 px-4 text-base font-medium hover:bg-accent/10',
              locale === loc && 'bg-accent text-accent-foreground',
            )}
          >
            {localeNames[loc]}
            {locale === loc && <Check className="ml-auto h-5 w-5" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

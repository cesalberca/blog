'use client'

import * as React from 'react'
import { Check, ChevronDown, Globe } from 'lucide-react'
import { Locale } from '@/core/i18n/locale'
import { useRouter } from '@/core/i18n/routing'
import { locales } from '@/core/i18n/locales'
import { localeNames } from '@/core/i18n/locale-names'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  const router = useRouter()

  const changeLocale = (newLocale: Locale) => {
    router.push('/', { locale: newLocale })
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="justify-between">
          <Globe className="mr-2 h-4 w-4" />
          <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        {locales.map(loc => (
          <DropdownMenuItem
            key={loc}
            onClick={() => changeLocale(loc)}
            className={cn('cursor-pointer', locale === loc && 'bg-accent')}
          >
            {localeNames[loc]}
            {locale === loc && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

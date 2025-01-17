'use client'

import { Locale } from '@/core/i18n/locale'
import { usePathname, useRouter } from '@/core/i18n/routing'
import { ChangeEvent } from 'react'
import { locales } from '@/core/i18n/locales'
import { localeNames } from '@/core/i18n/locale-names'

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const router = useRouter()

  const changeLocale = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value as Locale
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <div>
      <select value={locale} onChange={changeLocale}>
        {locales.map(loc => (
          <option key={loc} value={loc}>
            {localeNames[loc]}
          </option>
        ))}
      </select>
    </div>
  )
}

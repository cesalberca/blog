'use client'

import { Locale } from '@/core/i18n/locale'
import { useRouter, usePathname } from '@/core/i18n/routing'
import { ChangeEvent } from 'react'
import { locales } from '@/core/i18n/locales'
import { localeNames } from '@/core/i18n/locale-names'

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  // `pathname` will contain the current
  // route without the locale e.g. `/about`...
  const pathname = usePathname()
  const router = useRouter()

  const changeLocale = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value as Locale

    // ...if the user chose Arabic ("ar-eg"),
    // router.replace() will prefix the pathname
    // with this `newLocale`, effectively changing
    // languages by navigating to `/ar-eg/about`.
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <div>
      <select value={locale} onChange={changeLocale} className="...">
        {locales.map(loc => (
          <option key={loc} value={loc}>
            {localeNames[loc]}
          </option>
        ))}
      </select>
    </div>
  )
}

import { ServicesPage } from '../../../features/services/delivery/services.page'
import type { NextPage } from 'next'
import { setRequestLocale } from 'next-intl/server'
import type { Locale } from '@/core/i18n/locale'

export const metadata = {
  title: 'Services',
  description: 'Professional services including software architecture consultancy, training, and development.',
}

const Index: NextPage<{ params: Promise<{ locale: string }> }> = async ({ params }) => {
  const { locale } = await params
  setRequestLocale(locale)
  return <ServicesPage locale={locale as Locale} />
}

export default Index

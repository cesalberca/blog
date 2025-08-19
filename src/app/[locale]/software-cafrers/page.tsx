import type { NextPage } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { SoftwareCafrersPage } from '@/features/software-cafrers/delivery/software-cafrers.page'

export const metadata = {
  title: 'Software Cafrers: Haciendo Código que haría Vomitar a una Cabra',
  description:
    'Un libro sobre cómo escribir el peor código posible y convertirte en un auténtico cafre del desarrollo.',
  openGraph: {
    title: 'Software Cafrers: Haciendo Código que haría Vomitar a una Cabra',
    description:
      'Un libro sobre cómo escribir el peor código posible y convertirte en un auténtico cafre del desarrollo.',
  },
}

const Page: NextPage<{ params: Promise<{ locale: string }> }> = async ({ params }) => {
  const { locale } = await params
  setRequestLocale(locale)

  return <SoftwareCafrersPage />
}

export default Page

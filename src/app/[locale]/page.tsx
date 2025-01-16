import { getTranslations, setRequestLocale } from 'next-intl/server'
import { NextPage } from 'next'

const Page: NextPage<{ params: Promise<{ locale: string }> }> = async ({ params }) => {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations()

  return <h1>{t('common.dark')}</h1>
}
export default Page

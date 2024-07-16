import { useTranslations } from 'next-intl'

export default function Index() {
  const t = useTranslations('common')
  return <h1>{t('coverage')}</h1>
}

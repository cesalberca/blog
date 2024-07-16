import { BlogPosts } from './components/posts'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations()
  return <h1>{t('common.coverage')}</h1>
}

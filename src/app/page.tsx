import { BlogPosts } from './components/posts'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations()
  return <p>{t('common.coverage')}</p>
}

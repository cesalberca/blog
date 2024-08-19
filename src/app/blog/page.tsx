import { BlogPosts } from '../components/posts'
import { useTranslations } from 'next-intl'
import { Page } from '@/core/components/page/page'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Index() {
  const t = useTranslations()
  return (
    <Page>
      <h1 className="wrapper font-semibold text-2xl mb-8 tracking-tighter">{t('blog.title')}</h1>
      <BlogPosts />
    </Page>
  )
}

import { BlogPosts } from './components/posts'
import { useTranslations } from 'next-intl'
import { HomePage } from '../features/home/ui/home.page'

export default function Home() {
  return <HomePage articles={[]} />
}

import { BlogPostsPage } from '@/features/posts/delivery/posts.page'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Index() {
  return <BlogPostsPage />
}

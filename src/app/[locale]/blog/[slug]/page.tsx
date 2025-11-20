import type { Locale } from '@/core/i18n/locale'
import { getSlugs } from '@/get-slugs'
import path from 'path'

export default async function Page({ params }: { params: Promise<{ slug: string; locale: Locale }> }) {
  const { slug, locale } = await params
  const { default: Post } = await import(`@/content/posts/${slug}/${locale}.mdx`)

  return <Post />
}

export function generateStaticParams() {
  const posts = getSlugs(path.join(process.cwd(), 'src', 'content', 'posts'))

  return posts.map(post => ({
    slug: post.name,
  }))
}

export const dynamicParams = false

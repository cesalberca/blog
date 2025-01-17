import { getPosts } from '@/features/posts/domain/posts'
import { Locale } from '@/core/i18n/locale'

export const baseUrl = 'https://cesalberca.com'

export default async function sitemap() {
  const blogs = (await getPosts({ locale: Locale.EN })).map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
  }))

  const routes = ['', '/blog'].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}

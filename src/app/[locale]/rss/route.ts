import { baseUrl } from '../../sitemap'
import { getPosts } from '@/features/posts/domain/posts'
import { getLocale } from 'next-intl/server'
import { Locale } from '@/core/i18n/locale'

export async function GET() {
  const locale = (await getLocale()) as Locale
  const allBlogs = await getPosts({ locale })

  const itemsXml = allBlogs
    .sort((a, b) => {
      if (new Date(a.date) > new Date(b.date)) {
        return -1
      }
      return 1
    })
    .map(
      post =>
        `<item>
          <title>${post.title}</title>
          <link>${baseUrl}/blog/${post.slug}</link>
          <description>${post.summary}</description>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        </item>`,
    )
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>César Alberca</title>
        <link>${baseUrl}</link>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}

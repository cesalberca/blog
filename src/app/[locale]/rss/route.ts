import { baseUrl } from '../../sitemap'
import { getPosts } from '@/posts'
import { getLocale } from 'next-intl/server'
import type { Locale } from '@/core/i18n/locale'
import { Datetime } from '@/core/date/datetime'

export async function GET() {
  const locale = (await getLocale()) as Locale
  const allBlogs = await getPosts({ locale })

  const itemsXml = allBlogs
    .sort((a, b) => {
      const dateA = Datetime.fromIso(a.date)
      const dateB = Datetime.fromIso(b.date)
      if (dateA.isAfter(dateB)) {
        return -1
      }
      return 1
    })
    .map(
      (post) =>
        `<item>
          <title>${post.title}</title>
          <link>${baseUrl}/blog/${post.slug}</link>
          <description>${post.summary}</description>
          <pubDate>${Datetime.fromIso(post.date).toUTCString()}</pubDate>
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

import type { TalkMetadata } from '@/features/talks/domain/talk-metadata'
import { getSlugs } from '@/get-slugs'
import { Locale } from '@/core/i18n/locale'
import path from 'path'
import fs from 'fs'

export async function getTalk({ slug, locale }: { slug: string; locale: Locale }): Promise<TalkMetadata | null> {
  try {
    const { metadata } = await import(`@/content/talks/${slug}/${locale}.mdx`)
    return {
      ...metadata,
      slug,
    }
  } catch (error) {
    console.error(`Error getting post ${slug} for locale ${locale}:`, error)
    return null
  }
}

export async function getTalks({ locale }: { locale: Locale }): Promise<TalkMetadata[]> {
  try {
    const slugs = getSlugs(path.join(process.cwd(), 'src', 'content', 'talks'))

    const talks: TalkMetadata[] = []

    for (const { name } of slugs) {
      const filePath = path.join(process.cwd(), 'src', 'content', 'talks', name, `${locale}.mdx`)

      if (fs.existsSync(filePath)) {
        try {
          const { metadata } = await import(`@/content/talks/${name}/${locale}.mdx`)
          talks.push({
            ...metadata,
            slug: name,
          })
        } catch (error) {
          console.error(`Error reading post ${name} for locale ${locale}:`, error)
        }
      }
    }

    talks.sort((a, b) => +new Date(b.date) - +new Date(a.date))

    return talks
  } catch (error) {
    console.error(`Error getting posts for locale ${locale}:`, error)
    return []
  }
}

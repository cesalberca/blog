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
          // Read the file content to extract the abstract
          const fileContent = fs.readFileSync(filePath, 'utf-8')

          // Extract the content after the metadata block
          const contentMatch = fileContent.match(/^export const metadata[\s\S]*?\}\s*\n([\s\S]*)$/m)
          const abstract = contentMatch?.[1]?.trim() ?? ''

          // Import the metadata
          const { metadata } = await import(`@/content/talks/${name}/${locale}.mdx`)

          talks.push({
            ...metadata,
            slug: name,
            abstract: abstract,
          })
        } catch (error) {
          console.error(`Error reading post ${name} for locale ${locale}:`, error)
        }
      }
    }

    // Sort talks by the most recent event date
    talks.sort((a, b) => {
      // Find the most recent event date for each talk
      const getLatestEventDate = (talk: TalkMetadata): Date => {
        if (!talk.events || talk.events.length === 0 || !Array.isArray(talk.events)) {
          return new Date(0) // Return earliest possible date if no events or events is not an array
        }

        // Sort events by date (newest first) and return the first one's date
        const sorted = [...talk.events].sort((e1, e2) => new Date(e2.date).getTime() - new Date(e1.date).getTime())
        const firstDate = sorted[0]?.date
        return new Date(firstDate ?? 0)
      }

      const latestDateA = getLatestEventDate(a)
      const latestDateB = getLatestEventDate(b)

      // Sort by most recent event date (newest first)
      return latestDateB.getTime() - latestDateA.getTime()
    })

    return talks
  } catch (error) {
    console.error(`Error getting posts for locale ${locale}:`, error)
    return []
  }
}

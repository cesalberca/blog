import { getSlugs } from '@/get-slugs'
import type { Locale } from '@/core/i18n/locale'
import path from 'node:path'
import fs from 'node:fs'
import type { NewsletterMetadata } from '@/features/email/domain/newsletter-metadata'
import { Datetime } from '@/core/date/datetime'
import { compareNewsletters } from '@/features/email/domain/sort-newsletters'

export async function getNewsletter({ slug, locale }: { slug: string; locale: Locale }): Promise<NewsletterMetadata> {
  try {
    const { metadata } = await import(`@/content/emails/newsletter/${slug}/${locale}.mdx`)
    return {
      ...metadata,
      // Convert to Datetime if present; keep undefined as undefined
      date: metadata.date ? Datetime.fromIso(metadata.date) : undefined,
      slug,
    }
  } catch (error) {
    console.error(`Error getting newsletter ${slug} for locale ${locale}:`, error)
    throw error
  }
}

export async function getNewsletters({ locale }: { locale: Locale }): Promise<NewsletterMetadata[]> {
  try {
    const basePath = path.join(process.cwd(), 'src', 'content', 'emails', 'newsletter')
    const slugs = getSlugs(basePath)

    const newsletters: NewsletterMetadata[] = []

    for (const { name } of slugs) {
      const filePath = path.join(basePath, name, `${locale}.mdx`)

      if (fs.existsSync(filePath)) {
        const newsletter = await getNewsletter({ slug: name, locale })
        newsletters.push(newsletter)
      }
    }

    // Sort newsletters so that undefined dates go first, then most recent dates (descending)
    newsletters.sort(compareNewsletters)

    return newsletters
  } catch (error) {
    console.error(`Error getting posts for locale ${locale}:`, error)
    return []
  }
}

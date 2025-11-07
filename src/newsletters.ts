import { getSlugs } from '@/get-slugs'
import { Locale } from '@/core/i18n/locale'
import path from 'path'
import fs from 'fs'
import type { NewsletterMetadata } from '@/features/email/domain/newsletter-metadata'
import { Datetime } from '@/core/date/datetime'

export async function getNewsletter({ slug, locale }: { slug: string; locale: Locale }): Promise<NewsletterMetadata> {
  try {
    const { metadata } = await import(`@/content/emails/newsletter/${slug}/${locale}.mdx`)
    return {
      ...metadata,
      date: Datetime.fromIso(metadata.date),
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

    return newsletters
  } catch (error) {
    console.error(`Error getting posts for locale ${locale}:`, error)
    return []
  }
}

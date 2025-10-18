import { getSlugs } from '@/get-slugs'
import { Locale } from '@/core/i18n/locale'
import path from 'path'
import fs from 'fs'
import type { NewsletterMetadata } from '@/features/email/domain/newsletter-metadata'

export async function getNewsletter({
  slug,
  locale,
}: {
  slug: string
  locale: Locale
}): Promise<NewsletterMetadata | null> {
  try {
    const { metadata } = await import(`@/content/email/newsletters/${slug}/${locale}.mdx`)
    return {
      ...metadata,
      slug,
    }
  } catch (error) {
    console.error(`Error getting post ${slug} for locale ${locale}:`, error)
    return null
  }
}

export async function getNewsletters({ locale }: { locale: Locale }): Promise<NewsletterMetadata[]> {
  try {
    const basePath = path.join(process.cwd(), 'src', 'content', 'emails', 'newsletters')
    const slugs = getSlugs(basePath)

    const newsletters: NewsletterMetadata[] = []

    for (const { name } of slugs) {
      const filePath = path.join(basePath, name, `${locale}.mdx`)

      console.log('filePath', filePath)

      if (fs.existsSync(filePath)) {
        const { metadata } = await import(`@/content/emails/newsletters/${name}/${locale}.mdx`)

        newsletters.push(metadata)
      }
    }

    return newsletters
  } catch (error) {
    console.error(`Error getting posts for locale ${locale}:`, error)
    return []
  }
}

import type { Locale } from '@/core/i18n/locale'
import { getSlugs } from '@/get-slugs'
import path from 'node:path'

export default async function Page({ params }: { params: Promise<{ slug: string; locale: Locale }> }) {
  const { slug, locale } = await params
  const { default: Newsletter } = await import(`@/content/emails/newsletter/${slug}/${locale}.mdx`)

  return <Newsletter />
}

export function generateStaticParams() {
  const newsletters = getSlugs(path.join(process.cwd(), 'src', 'content', 'emails', 'newsletter'))

  return newsletters.map((newsletter) => ({
    slug: newsletter.name,
  }))
}

export const dynamicParams = false

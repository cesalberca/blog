import type { Locale } from '@/core/i18n/locale'
import { getSlugs } from '@/get-slugs'
import path from 'path'

export default async function Page({ params }: { params: Promise<{ slug: string; locale: Locale }> }) {
  const { slug, locale } = await params
  const { default: Talk } = await import(`@/content/talks/${slug}/${locale}.mdx`)

  return <Talk />
}

export function generateStaticParams() {
  const talks = getSlugs(path.join(process.cwd(), 'src', 'content', 'talks'))

  return talks.map(talk => ({
    slug: talk.name,
  }))
}

export const dynamicParams = false

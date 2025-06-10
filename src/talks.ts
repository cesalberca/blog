import type { TalkMetadata } from '@/features/talks/domain/talk-metadata'
import { getSlugs } from '@/get-slugs'
import { Locale } from '@/core/i18n/locale'

export async function getTalks({ locale: _locale }: { locale: Locale }): Promise<TalkMetadata[]> {
  const slugs = await getSlugs(`./src/app/[locale]/talks/(talks)`)

  return await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`./app/[locale]/talks/(talks)/${name}/page.mdx`)
      return metadata
    }),
  )
}

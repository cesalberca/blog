import type { TalkMetadata } from '@/features/talks/domain/talk-metadata'
import { getSlugs } from '@/lib/get-slugs'

export async function getTalks(): Promise<TalkMetadata[]> {
  const slugs = await getSlugs(`./src/app/[locale]/talks/(talks)`)

  return await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`../../../../src/app/[locale]/talks/(talks)/${name}/page.mdx`)
      return metadata
    }),
  )
}

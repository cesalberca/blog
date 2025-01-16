import type { TalkMetadata } from '@/features/talks/domain/talk-metadata'
import { getSlugs } from '@/lib/get-slugs'

export async function getTalks(): Promise<TalkMetadata[]> {
  const slugs = await getSlugs('../../../src/app/talks/(talks)')

  return await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`../../../app/talks/(talks)/${name}/page.mdx`)
      return metadata
    }),
  )
}

import { readdir } from 'node:fs/promises'

export interface TalkMetadata {
  title: string
  length: string
  slug: string
  difficulty: string
  language: string
  topics: string[]
  image: string
  events: {
    name: string
    date: string
    slides: string
    video: string
  }[]
}

export async function getTalks(): Promise<TalkMetadata[]> {
  const slugs = (await readdir('./src/app/talks/(talks)', { withFileTypes: true })).filter(dirent =>
    dirent.isDirectory(),
  )

  return await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`./app/talks/(talks)/${name}/page.mdx`)
      return metadata
    }),
  )
}

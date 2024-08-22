import { readdir } from 'node:fs/promises'

export interface PostMetadata {
  slug: string
  title: string
  date: string
  readTime: number
  image: string
  summary: string
}

export async function getPosts(): Promise<PostMetadata[]> {
  const slugs = (await readdir('./src/app/blog/(posts)', { withFileTypes: true })).filter(dirent =>
    dirent.isDirectory(),
  )

  console.log({ slugs })

  const posts: PostMetadata[] = await Promise.all(
    slugs.map(async ({ name }) => {
      console.log({ name })
      const { metadata } = await import(`./app/blog/(posts)/${name}/page.mdx`)
      return metadata
    }),
  )

  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date))

  return posts
}

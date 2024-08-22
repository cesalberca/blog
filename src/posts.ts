import { readdir } from 'node:fs/promises'
import type { Category } from '@/app/category'

export interface PostMetadata {
  slug: string
  title: string
  date: string
  readTime: number
  image: string
  summary: string
  categories: Category[]
}

export async function getPosts(): Promise<PostMetadata[]> {
  const slugs = (await readdir('./src/app/blog/(posts)', { withFileTypes: true })).filter(dirent =>
    dirent.isDirectory(),
  )

  const posts: PostMetadata[] = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`./app/blog/(posts)/${name}/page.mdx`)
      return metadata
    }),
  )

  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date))

  return posts
}

export async function getPostsByCategory({ category }: { category: Category }): Promise<PostMetadata[]> {
  const allPosts = await getPosts()

  const posts = allPosts.filter(post => post.categories.indexOf(category) !== -1)

  return posts
}

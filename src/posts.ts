import type { Category } from '@/app/category'
import type { PostMetadata } from '@/post-metadata'
import { getSlugs } from '@/lib/get-slugs'

export async function getPosts(): Promise<PostMetadata[]> {
  const slugs = await getSlugs('./src/app/[locale]/blog/(posts)')

  const posts: PostMetadata[] = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`./app/[locale]/blog/(posts)/${name}/page.mdx`)
      return metadata
    }),
  )

  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date))

  return posts
}

export async function getPostsByCategory({ category }: { category: Category }): Promise<PostMetadata[]> {
  const allPosts = await getPosts()
  return allPosts.filter(post => post.categories.includes(category))
}

import type { Category } from '@/features/posts/domain/category'
import type { PostMetadata } from '@/features/posts/domain/post-metadata'
import { getSlugs } from '@/lib/get-slugs'
import { Locale } from '@/core/i18n/locale'

export async function getPosts({ locale }: { locale: Locale }): Promise<PostMetadata[]> {
  const slugs = await getSlugs(`./src/app/[locale]/blog/(posts)/(${locale})`)

  const posts: PostMetadata[] = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`../../../../src/app/[locale]/blog/(posts)/(${locale})/${name}/page.mdx`)
      return metadata
    }),
  )

  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date))

  return posts
}

export async function getPostsByCategory({
  category,
  locale,
}: {
  category: Category
  locale: Locale
}): Promise<PostMetadata[]> {
  const allPosts = await getPosts({ locale })
  return allPosts.filter(post => post.categories.includes(category))
}

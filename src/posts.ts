import type { Category } from '@/features/posts/domain/category'
import type { PostMetadata } from '@/features/posts/domain/post-metadata'
import { getSlugs } from '@/get-slugs'
import { Locale } from '@/core/i18n/locale'

export async function getPost({ slug, locale }: { slug: string; locale: Locale }): Promise<PostMetadata | null> {
  try {
    const { metadata } = await import(`./app/[locale]/blog/(posts)/${slug}/${locale}.mdx`)
    return metadata
  } catch (error) {
    return null
  }
}

export async function getPosts({ locale }: { locale: Locale }): Promise<PostMetadata[]> {
  const slugs = await getSlugs(`./src/app/[locale]/blog/(posts)`)

  const posts: PostMetadata[] = await Promise.all(
    slugs.map(async ({ name }) => {
      try {
        const { metadata } = await import(`./app/[locale]/blog/(posts)/${name}/${locale}.mdx`)
        return metadata
      } catch (error) {
        return null
      }
    }),
  )

  const existingPosts = posts.filter(x => x !== null)

  existingPosts.sort((a, b) => +new Date(b.date) - +new Date(a.date))

  return existingPosts
}

export async function getPostsByCategory({
  category,
  locale,
}: {
  category: Category
  locale: Locale
}): Promise<PostMetadata[]> {
  const allPosts = await getPosts({ locale })

  const filteredPosts = allPosts.filter(post => {
    const includes = post.categories.includes(category)
    return includes
  })

  return filteredPosts
}

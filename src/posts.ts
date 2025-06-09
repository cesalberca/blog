import type { Category } from '@/features/posts/domain/category'
import type { PostMetadata } from '@/features/posts/domain/post-metadata'
import { getSlugs } from '@/lib/get-slugs'
import { Locale } from '@/core/i18n/locale'
import { existsSync } from 'node:fs'

export async function getPosts({ locale }: { locale: Locale }): Promise<PostMetadata[]> {
  const slugs = await getSlugs(`./src/app/[locale]/blog/(posts)`)

  const posts: PostMetadata[] = await Promise.all(
    slugs.map(async ({ name }) => {
      const filePath = `./src/app/[locale]/blog/(posts)/${name}/${locale}.mdx`
      const fileExists = existsSync(filePath)

      if (!fileExists) {
        return null
      }

      try {
        const importPath = `./app/[locale]/blog/(posts)/${name}/${locale}.mdx`
        const { metadata } = await import(importPath)
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

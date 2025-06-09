import type { Category } from '@/features/posts/domain/category'
import type { PostMetadata } from '@/features/posts/domain/post-metadata'
import { getSlugs } from '@/lib/get-slugs'
import { Locale } from '@/core/i18n/locale'
import { existsSync } from 'node:fs'

export async function getPosts({ locale }: { locale: Locale }): Promise<PostMetadata[]> {
  const slugs = await getSlugs(`./src/app/[locale]/blog/(posts)`)

  console.log({ slugs })

  const posts: PostMetadata[] = await Promise.all(
    slugs.map(async ({ name }) => {
      console.log(existsSync(`./app/[locale]/blog/(posts)/${name}/${locale}.mdx`), { name, locale })
      if (!existsSync(`./app/[locale]/blog/(posts)/${name}/${locale}.mdx`)) {
        return null
      }
      const { metadata } = await import(`./app/[locale]/blog/(posts)/${name}/${locale}.mdx`)
      return metadata
    }),
  )

  const existingPosts = posts.filter(x => x !== null)

  console.log({ existingPosts })

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
  return allPosts.filter(post => post.categories.includes(category))
}

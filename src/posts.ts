import fs from 'node:fs'
import path from 'node:path'
import type { Category } from '@/features/posts/domain/category'
import type { PostMetadata } from '@/features/posts/domain/post-metadata'
import type { Locale } from '@/core/i18n/locale'
import { getSlugs } from '@/get-slugs'
import { Datetime } from '@/core/date/datetime'

export async function getPost({ slug, locale }: { slug: string; locale: Locale }): Promise<PostMetadata | null> {
  try {
    const { metadata } = await import(`@/content/posts/${slug}/${locale}.mdx`)
    return {
      ...metadata,
      slug,
    }
  } catch (error) {
    console.error(`Error getting post ${slug} for locale ${locale}:`, error)
    return null
  }
}

export async function getPosts({ locale }: { locale: Locale }): Promise<PostMetadata[]> {
  try {
    const slugs = getSlugs(path.join(process.cwd(), 'src', 'content', 'posts'))

    const posts: PostMetadata[] = []

    for (const { name } of slugs) {
      const filePath = path.join(process.cwd(), 'src', 'content', 'posts', name, `${locale}.mdx`)

      if (fs.existsSync(filePath)) {
        try {
          const { metadata } = await import(`@/content/posts/${name}/${locale}.mdx`)
          posts.push({
            ...metadata,
            slug: name,
          })
        } catch (error) {
          console.error(`Error reading post ${name} for locale ${locale}:`, error)
        }
      }
    }

    posts.sort((a, b) => Datetime.fromIso(b.date).getTime() - Datetime.fromIso(a.date).getTime())

    return posts
  } catch (error) {
    console.error(`Error getting posts for locale ${locale}:`, error)
    return []
  }
}

export async function getPostsByCategory({
  category,
  locale,
}: {
  category: Category
  locale: Locale
}): Promise<PostMetadata[]> {
  const allPosts = await getPosts({ locale })

  const filteredPosts = allPosts.filter((post) => {
    const includes = post.categories.includes(category)
    return includes
  })

  return filteredPosts
}

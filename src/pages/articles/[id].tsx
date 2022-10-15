import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { GetArticleUseCase } from '../../features/articles/application/get-article-use-case'
import type { Locale } from '../../core/i18n/locale'
import { container } from '../../container'
import { Article as ArticleDomain } from '../../features/articles/domain/article'
import { Id } from '../../core/id'
import { ArticlePage } from '../../features/articles/delivery/article.page'
import { TYPES } from '../../types'
import type { ArticlesRepository } from '../../features/articles/domain/articles-repository'

const Index: NextPage<{ article: ReturnType<ArticleDomain['toJson']> }> = ({ article }) => {
  return <ArticlePage article={ArticleDomain.fromJson(article)} />
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const article = await container
    .resolve(GetArticleUseCase)
    .execute({ id: Id.fromValue(params?.id?.toString()!), locale: locale as Locale })

  return {
    props: {
      article: article.toJson(),
      messages: (await import(`../../core/i18n/${locale}.json`)).default,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const postFileRepository = container.resolve<ArticlesRepository>(TYPES.ARTICLES_REPOSITORY)

  const paths: { params: { id: string }; locale: string }[] = []

  for (const locale of locales!) {
    const slugs = await postFileRepository.findPostSlugs(locale as Locale)
    for (const slug of slugs) {
      paths.push({
        params: {
          id: slug.value,
        },
        locale,
      })
    }
  }

  return {
    paths,
    fallback: false,
  }
}

export default Index

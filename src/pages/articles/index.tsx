import type { GetStaticProps, NextPage } from 'next'
import { GetAllArticlesUseCase } from '../../features/articles/application/get-all-articles-use-case'
import { Article } from '../../features/articles/domain/article'
import { container } from '../../core/dependency-injection/container'
import type { Locale } from '../../core/i18n/locale'
import { ArticlesPage } from '../../features/articles/delivery/articles.page'

const Index: NextPage<{ articles: ReturnType<Article['toJson']>[] }> = ({ articles }) => {
  return <ArticlesPage articles={articles.map(x => Article.fromJson(x))} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const articles = await container.resolve(GetAllArticlesUseCase).execute({ locale: locale as Locale })

  return {
    props: {
      articles: articles.map(x => x.toJson()),
      messages: (await import(`../../core/i18n/${locale}.json`)).default,
    },
  }
}

export default Index

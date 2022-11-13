import type { GetStaticProps, NextPage } from 'next'
import { HomePage } from '../features/home/ui/home.page'
import { Article } from '../features/articles/domain/article'
import { container } from '../core/dependency-injection/container'
import type { Locale } from '../core/i18n/locale'
import { GetLatestArticles } from '../features/articles/application/get-latest-articles-use-case'

const Index: NextPage<{ articles: ReturnType<Article['toJson']>[] }> = ({ articles }) => {
  return <HomePage articles={articles.map(x => Article.fromJson(x))} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const articles = await container.resolve(GetLatestArticles).execute({ locale: locale as Locale })

  return {
    props: {
      articles: articles.map(x => x.toJson()),
      messages: (await import(`../core/i18n/${locale}.json`)).default,
    },
  }
}

export default Index

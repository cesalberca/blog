import type { GetStaticProps, NextPage } from 'next'
import { GetAllArticlesUseCase } from '../features/blog/application/use-cases/get-all-articles-use-case'
import { Home } from '../features/home/ui/home'
import { Article } from '../features/blog/domain/articles/article'
import { container } from '../container'
import { firstValueFrom } from 'rxjs'

const Index: NextPage<{ articles: ReturnType<Article['toJson']>[] }> = ({ articles }) => {
  return <Home articles={articles.map(x => Article.fromJson(x))} />
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await firstValueFrom(container.resolve(GetAllArticlesUseCase).execute())

  return {
    props: { articles: articles.map(x => x.toJson()) },
  }
}

export default Index

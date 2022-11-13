import { ArticlesMother } from '../domain/articles-mother'
import type { Article } from '../domain/article'
import type { ArticlesRepository } from '../domain/articles-repository'
import { anything, instance, mock, when } from 'ts-mockito'
import { Locale } from '../../../core/i18n/locale'
import { ArticlesOrderer } from '../domain/articles-orderer'
import { GetLatestArticles } from './get-latest-articles-use-case'

describe('GetLatestArticlesUseCase', () => {
  it('should get all articles', async () => {
    const { articlesRepository, getLatestArticlesUseCase, articlesOrderer } = setup()
    const articles: Article[] = ArticlesMother.articles()
    when(articlesRepository.findAllByLocale(Locale.EN)).thenResolve(articles)
    when(articlesOrderer.order(anything())).thenReturn(articles)

    const actual = await getLatestArticlesUseCase.execute({ locale: Locale.EN })

    expect(actual).toHaveLength(3)
  })
})

function setup() {
  const articlesRepository = mock<ArticlesRepository>()
  const articlesOrderer = mock(ArticlesOrderer)

  return {
    articlesRepository,
    articlesOrderer,
    getLatestArticlesUseCase: new GetLatestArticles(instance(articlesRepository), instance(articlesOrderer)),
  }
}

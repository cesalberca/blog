import { GetAllArticlesUseCase } from './get-all-articles-use-case'
import { ArticlesMother } from '../domain/articles-mother'
import type { Article } from '../domain/article'
import type { ArticlesRepository } from '../domain/articles-repository'
import { anything, instance, mock, when } from 'ts-mockito'
import { Locale } from '../../../core/i18n/locale'
import { ArticlesOrderer } from '../domain/articles-orderer'

describe('GetAllArticlesUseCase', () => {
  it('should get all articles', async () => {
    const { articlesRepository, getAllArticlesUseCase, articlesOrderer } = setup()
    const articles: Article[] = ArticlesMother.articles()
    when(articlesRepository.findAllByLocale(Locale.EN)).thenResolve(articles)
    when(articlesOrderer.order(anything())).thenReturn(articles)

    const actual = await getAllArticlesUseCase.execute({ locale: Locale.EN })

    expect(actual[0].title).toBe('Haciendo (Vue)n frontend')
  })
})

function setup() {
  const articlesRepository = mock<ArticlesRepository>()
  const articlesOrderer = mock(ArticlesOrderer)

  return {
    articlesRepository,
    articlesOrderer,
    getAllArticlesUseCase: new GetAllArticlesUseCase(instance(articlesRepository), instance(articlesOrderer)),
  }
}

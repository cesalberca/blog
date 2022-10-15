import { GetAllArticlesUseCase } from './get-all-articles-use-case'
import { ArticlesMother } from '../domain/articles/articles-mother'
import type { Article } from '../domain/articles/article'
import type { ArticlesRepository } from '../domain/articles/articles-repository'
import { instance, mock, verify, when } from 'ts-mockito'
import { Locale } from '../../../core/i18n/locale'

describe('GetAllArticlesUseCase', () => {
  it('should get all articles', async () => {
    const { articlesRepository, getAllArticlesUseCase } = setup()

    await getAllArticlesUseCase.execute({ locale: Locale.EN })

    verify(articlesRepository.findAllByLocale(Locale.EN)).once()
  })

  it('should return the articles ordered by date', async () => {
    const { getAllArticlesUseCase } = setup()

    const result = await getAllArticlesUseCase.execute({ locale: Locale.EN })

    expect(result[0].date.value > result[1].date.value).toBe(true)
  })
})

function setup() {
  const articlesRepository = mock<ArticlesRepository>()
  const articles: Article[] = ArticlesMother.articles()
  when(articlesRepository.findAllByLocale(Locale.EN)).thenResolve(articles)
  return {
    articlesRepository,
    getAllArticlesUseCase: new GetAllArticlesUseCase(instance(articlesRepository)),
  }
}

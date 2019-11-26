import { GetAllArticlesUseCase } from '../GetAllArticlesUseCase'
import { ArticlesMother } from '../../../domain/articles/ArticlesMother'
import { Locale } from '../../../domain/language/Locale'
import { Article } from '../../../domain/articles/Article'
import { ArticlesRepository } from '../../../domain/articles/ArticlesRepository'
import { instance, mock, verify, when } from 'ts-mockito'

describe('GetAllArticlesUseCase', () => {
  it('should get all articles', async () => {
    const { articlesRepository, getAllArticlesUseCase } = setup()

    await getAllArticlesUseCase.execute({ locale: Locale.DEFAULT })

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
  const articles: Article[] = ArticlesMother.getFakeArticles()
  when(articlesRepository.findAllByLocale(Locale.EN)).thenResolve(articles)
  return {
    articlesRepository,
    getAllArticlesUseCase: new GetAllArticlesUseCase(instance(articlesRepository))
  }
}

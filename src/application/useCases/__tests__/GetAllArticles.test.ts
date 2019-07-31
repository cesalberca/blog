import { GetAllArticlesUseCase } from '../GetAllArticlesUseCase'
import { Locale } from '../../../domain/language'
import { ArticlesMockRepository } from '../../../infraestructure/articles/ArticlesMockRepository'
import { ArticlesMother } from '../../../domain/articles/ArticlesMother'
import { Article, ArticlesRepository } from '../../../domain/articles'

jest.mock('../UseCaseDecorator')

describe('GetAllArticlesUseCase', () => {
  let getAllArticles: GetAllArticlesUseCase
  let mock: ArticlesRepository

  beforeEach(() => {
    mock = new ArticlesMockRepository()
    ;(mock.findAllByLocale as jest.Mock).mockResolvedValue([])
    getAllArticles = new GetAllArticlesUseCase(mock, Locale.EN)
  })

  it('should get all articles', async () => {
    expect.assertions(1)

    await getAllArticles.execute()

    expect(mock.findAllByLocale).toHaveBeenCalledWith(0)
  })

  it('should return the articles ordered by date', async () => {
    expect.assertions(1)
    const articles: Article[] = ArticlesMother.getFakeArticles()
    ;(mock.findAllByLocale as jest.Mock).mockResolvedValue(articles)

    const result = await getAllArticles.execute()

    expect(result[0].date.value > result[1].date.value).toBe(true)
  })
})

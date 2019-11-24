import { GetArticleUseCase } from '../GetArticleUseCase'
import { ArticlesMockRepository } from '../../../infraestructure/articles/ArticlesMockRepository'
import { Locale } from '../../../domain/language/Locale'
import { ArticlesRepository } from '../../../domain/articles/ArticlesRepository'
import { Id } from '../../../domain/Id'

jest.mock('../UseCaseDecorator')

describe('GetArticle', () => {
  let getArticle: GetArticleUseCase
  let mock: ArticlesRepository

  beforeEach(() => {
    mock = new ArticlesMockRepository()
    ;(mock.findAllByLocale as jest.Mock).mockResolvedValue([])
    getArticle = new GetArticleUseCase(mock, Id.fromValue('bar'), Locale.EN)
  })

  it('should get an article', async () => {
    expect.assertions(1)

    await getArticle.execute()

    expect(mock.findOneByLocale).toHaveBeenCalledWith(Id.fromValue('bar'), 0)
  })
})

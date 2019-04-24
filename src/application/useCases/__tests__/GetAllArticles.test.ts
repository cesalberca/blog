import { GetAllArticles } from '../GetAllArticles'
import { ArticlesFileRepository } from '../../../infraestructure/articles/ArticlesFileRepository'
import { Locale } from '../../../domain/language'

jest.mock('../../../infraestructure/articles/ArticlesFileRepository')
jest.mock('../UseCaseDecorator')

describe('GetAllArticles', () => {
  it('should get all articles', async () => {
    expect.assertions(1)
    const getArticle = GetAllArticles.create({ locale: Locale.DEFAULT })

    await getArticle.execute()

    const calls = (ArticlesFileRepository as jest.Mock).mock.instances[0].findAllByLocale.mock.calls
    expect(calls[0][0]).toEqual(0)
  })
})

import { GetArticle } from '../GetArticle'
import { ArticlesFileRepository } from '../../../infraestructure/articles/ArticlesFileRepository'
import { Id } from '../../../domain'
import { Locale } from '../../../domain/language'

jest.mock('../../../infraestructure/articles/ArticlesFileRepository')
jest.mock('../UseCaseDecorator')

describe('GetArticle', () => {
  it('should get an article', async () => {
    expect.assertions(2)
    const getArticle = GetArticle.create({
      id: Id.fromValue('foo'),
      locale: Locale.EN
    })

    await getArticle.execute()

    const findOneByLocaleCalls = (ArticlesFileRepository as jest.Mock).mock.instances[0]
      .findOneByLocale.mock.calls
    expect(findOneByLocaleCalls[0][0]).toEqual(Id.fromValue('foo'))
    expect(findOneByLocaleCalls[0][1]).toEqual(0)
  })
})

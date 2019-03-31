import { GetArticle } from '../GetArticle'
import { ArticlesFileRepository } from '../../../infraestructure/articles/ArticlesFileRepository'
import { Id } from '../../../domain'
import { Locale, Translator } from '../../../infraestructure/language'
import { FileLoader } from '../../../infraestructure/FileLoader'
import { TranslationService } from '../../TranslationService'

jest.mock('../../../infraestructure/articles/ArticlesFileRepository')

describe('GetArticle', () => {
  it('should get an article', async () => {
    expect.assertions(2)
    const getArticle = new GetArticle(
      new ArticlesFileRepository(
        FileLoader.create(),
        TranslationService.create(Translator.create())
      ),
      Id.fromValue('foo'),
      Locale.EN
    )

    await getArticle.execute()

    const findOneByLocaleCalls = (ArticlesFileRepository as jest.Mock).mock.instances[0]
      .findOneByLocale.mock.calls
    expect(findOneByLocaleCalls[0][0]).toEqual(Id.fromValue('foo'))
    expect(findOneByLocaleCalls[0][1]).toEqual(0)
  })
})

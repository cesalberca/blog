import { GetAllArticles } from '../GetAllArticles'
import { ArticlesFileRepository } from '../../../infraestructure/articles/ArticlesFileRepository'
import { Locale, Translator } from '../../../infraestructure/language'
import { FileLoader } from '../../../infraestructure/FileLoader'
import { TranslationService } from '../../TranslationService'

jest.mock('../../../infraestructure/articles/ArticlesFileRepository')

describe('GetAllArticles', () => {
  it('should get all articles', async () => {
    expect.assertions(1)
    const getArticle = new GetAllArticles(
      new ArticlesFileRepository(
        FileLoader.create(),
        TranslationService.create(Translator.create())
      ),
      Locale.EN
    )

    await getArticle.execute()

    const calls = (ArticlesFileRepository as jest.Mock).mock.instances[0].findAllByLocale.mock.calls
    expect(calls[0][0]).toEqual(0)
  })
})

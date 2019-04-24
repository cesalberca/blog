import { ArticlesFileRepository } from '../ArticlesFileRepository'
import { FileLoader } from '../../FileLoader'
import { Locale, Translator } from '../../../domain/language'
import { TranslationService } from '../../../domain/TranslationService'

jest.mock('../../FileLoader')

describe('ArticlesFileRepository', () => {
  it.skip('should get articles from file system', async () => {
    expect.assertions(1)
    const mock = jest.fn()
    mock.mockReturnValue({ loadArticles: () => ['./use-cases-and-commands.md'] })
    FileLoader.create = mock.bind(FileLoader)
    const fileLoader = FileLoader.create()
    const repository = new ArticlesFileRepository(
      fileLoader,
      TranslationService.create(Translator.create())
    )

    const articles = await repository.findAllByLocale(Locale.EN)

    expect(articles).toEqual([])
  })
})

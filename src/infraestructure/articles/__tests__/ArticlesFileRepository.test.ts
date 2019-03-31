import { ArticlesFileRepository } from '../ArticlesFileRepository'
import { FileLoader } from '../../FileLoader'
import { Locale, Translator } from '../../language'
import { TranslationService } from '../../../application'

jest.mock('../../FileLoader')

describe('ArticlesFileRepository', () => {
  it.skip('should get articles from file system', async () => {
    expect.assertions(1)
    const fileLoader = FileLoader.create()
    ;(fileLoader.loadArticles as jest.Mock).mockReturnValue(['./haciendo-vuen-frontend.md'])

    const repository = new ArticlesFileRepository(
      fileLoader,
      TranslationService.create(Translator.create())
    )

    const articles = await repository.findAllByLocale(Locale.EN)

    expect(articles).toEqual([])
  })
})

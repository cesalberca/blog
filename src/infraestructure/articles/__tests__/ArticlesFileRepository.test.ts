import { ArticlesFileRepository } from '../ArticlesFileRepository'
import { FileLoader } from '../../FileLoader'

jest.mock('../../FileLoader')

describe('ArticlesFileRepository', () => {
  it('should get articles from file system', async () => {
    expect.assertions(1)
    const fileLoader = new FileLoader()
    ;(fileLoader.loadArticles as jest.Mock).mockReturnValue(['./haciendo-vuen-frontend.md'])

    const repository = new ArticlesFileRepository(fileLoader)

    const articles = await repository.findAllByLocale('en')

    expect(articles).toEqual([])
  })
})

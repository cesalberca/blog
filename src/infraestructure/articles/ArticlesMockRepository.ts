import { ArticlesRepository } from '../../domain/articles'

export class ArticlesMockRepository implements ArticlesRepository {
  public findAllByLocale = jest.fn()

  public findOneByLocale = jest.fn()
}

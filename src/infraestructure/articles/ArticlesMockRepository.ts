import { ArticlesRepository } from '../../domain/articles'

export class ArticlesMockRepository implements ArticlesRepository {
  findAllByLocale = jest.fn()
  findOneByLocale = jest.fn()
}

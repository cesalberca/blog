import { ArticlesRepository } from '../../domain/articles/ArticlesRepository'

export class ArticlesMockRepository implements ArticlesRepository {
  findAllByLocale = jest.fn()
  findOneByLocale = jest.fn()
}

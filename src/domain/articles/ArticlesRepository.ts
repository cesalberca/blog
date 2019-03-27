import { Id } from '../Id'
import { Article } from './Article'

export interface ArticlesRepository {
  findOne(id: Id): Promise<Article>
}

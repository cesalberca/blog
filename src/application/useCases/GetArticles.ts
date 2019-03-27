import { Command } from '../../infraestructure/Command'
import { ArticlesMother } from '../../domain/articles/ArticlesMother'
import { Article } from '../../domain/articles/Article'

export class GetArticles implements Command<Article[]> {
  public async execute(): Promise<Article[]> {
    return ArticlesMother.getFakeArticles()
  }
}

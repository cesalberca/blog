import { Command } from '../../infraestructure/Command'
import { Article } from '../../domain/articles'
import { ArticlesMother } from '../../domain/articles/ArticlesMother'

export class GetRecentArticles implements Command<Article[]> {
  public async execute(): Promise<Article[]> {
    return ArticlesMother.getFakeArticles()
  }
}

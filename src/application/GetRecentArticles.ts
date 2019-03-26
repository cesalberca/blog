import { Command } from './Command'
import { Article } from '../domain/articles/Article'
import { ArticlesMother } from '../domain/articles/ArticlesMother'

export class GetRecentArticles implements Command<Article[]> {
  public async execute(): Promise<Article[]> {
    return ArticlesMother.getFakeArticles()
  }
}

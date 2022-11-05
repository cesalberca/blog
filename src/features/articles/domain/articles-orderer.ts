import { Injectable } from '../../../core/dependency-injection/injectable'
import type { Article } from './article'

@Injectable()
export class ArticlesOrderer {
  order(articles: Article[]): Article[] {
    return articles
      .slice()
      .sort((articleA, articleB) => Date.parse(articleB.date.toIso()) - Date.parse(articleA.date.toIso()))
  }
}

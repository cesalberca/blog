import { Command } from './Command'

export class GetArticleCommand implements Command<string> {
  public async execute(): Promise<string> {
    return 'goo' /*import('../domain/articles/en/test-article.md')*/
  }
}

import { Id } from './Id'
import { Markdown } from './Markdown'

export class Article {
  public constructor(
    private readonly id: Id,
    private readonly title: string,
    private readonly date: Date,
    private readonly body: Markdown
  ) {}
}

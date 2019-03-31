export class FileLoader {
  private constructor() {}

  public loadArticles(): string[] {
    const spanishArticles = require.context(`./../domain/articles/es`).keys()
    const englishArticles = require.context(`./../domain/articles/en`).keys()
    return Array.from(new Set([...spanishArticles, ...englishArticles]))
  }

  public static create() {
    return new FileLoader()
  }
}

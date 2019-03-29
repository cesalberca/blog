export class FileLoader {
  public loadArticles(): string[] {
    return require.context(`./../domain/articles/es`).keys()
  }
}

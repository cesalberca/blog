import { Injectable } from '../domain/types/injectable'

@Injectable()
export class FileLoader {
  loadArticles(): string[] {
    // @ts-ignore
    const spanishArticles = require.context(`../ui/content/articles/es`).keys()
    // @ts-ignore
    const englishArticles = require.context(`../ui/content/articles/en`).keys()
    debugger
    return Array.from(new Set([...spanishArticles, ...englishArticles]))
  }

  loadTalks(): string[] {
    // @ts-ignore
    const spanishTalks = require.context(`../ui/content/talks/es`).keys()
    // @ts-ignore
    const englishTalks = require.context(`../ui/content/talks/en`).keys()
    return Array.from(new Set([...spanishTalks, ...englishTalks]))
  }
}

import { Datetime } from '../../../core/datetime'
import type { ArticleDto } from './article-dto'
import { Article } from '../domain/article'
import type { ArticlesRepository } from '../domain/articles-repository'
import { Id } from '../../../core/id'
import { Markdown } from '../../../core/markdown'
import { Injectable } from '../../../core/dependency-injection/injectable'
import frontMatter from 'front-matter'
import { join, parse } from 'path'
import fs from 'fs'
import type { Locale } from '../../../core/i18n/locale'
import { Slug } from '../domain/slug'

@Injectable()
export class ArticlesFileRepository implements ArticlesRepository {
  async findOneByLocale(id: Id, locale: Locale): Promise<Article> {
    const fullPath = join(process.cwd(), `src/features/articles/infrastructure/${locale}/${id.value}.md`)
    return this.getArticle(fullPath)
  }

  async findAllByLocale(locale: Locale): Promise<Article[]> {
    const directory = join(process.cwd(), `src/features/articles/infrastructure/${locale}`)
    const files = fs.readdirSync(directory)
    return Promise.all(
      files.map(path => this.getArticle(join(process.cwd(), `src/features/articles/infrastructure/${locale}`, path))),
    )
  }

  async findPostSlugs(locale: Locale): Promise<Slug[]> {
    const directory = join(process.cwd(), `src/features/articles/infrastructure/${locale}`)
    const files = fs.readdirSync(directory)
    return files.map(x => Slug.fromValue(x.slice(0, x.length - 3)))
  }

  private getArticle(fullPath: string) {
    const file = fs.readFileSync(fullPath, 'utf8')
    const article: ArticleDto = frontMatter(file)
    return Article.create({
      id: Id.fromValue(parse(fullPath).name),
      body: Markdown.fromValue(article.body),
      date: Datetime.fromString(article.attributes.date),
      title: article.attributes.title,
      locale: article.attributes.locale as Locale,
      image: `/assets/images/${article.attributes.image}`,
    })
  }
}

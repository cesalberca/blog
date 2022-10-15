import { Datetime } from '../../domain/datetime'
import type { ArticleDto } from './article-dto'
import { Article } from '../../domain/articles/article'
import type { ArticlesRepository } from '../../domain/articles/articles-repository'
import { Id } from '../../domain/id'
import { Markdown } from '../../domain/markdown'
import { Injectable } from '../../domain/types/injectable'
import { articles } from './articles'
import frontMatter from 'front-matter'
import { join } from 'path'
import fs from 'fs'
import type { Locale } from '../../../../core/i18n/locale'
import { Slug } from '../../domain/articles/slug'

@Injectable()
export class ArticlesFileRepository implements ArticlesRepository {
  async findOneByLocale(id: Id, locale: Locale): Promise<Article> {
    const fullPath = join(process.cwd(), `src/features/blog/infrastructure/articles/${locale}/${id.value}.md`)
    const article: ArticleDto = frontMatter(fs.readFileSync(fullPath, 'utf8'))
    return Article.create({
      id,
      body: Markdown.fromValue(article.body),
      date: Datetime.fromString(article.attributes.date),
      title: article.attributes.title,
      locale: article.attributes.locale as Locale,
      image: join(process.cwd(), `src/features/blog/infrastructure/articles/images/${article.attributes.image}`),
    })
  }

  async findAllByLocale(locale: Locale): Promise<Article[]> {
    return Promise.all(articles.map(id => this.findOneByLocale(Id.fromValue(id), locale)))
  }

  async findPostSlugs(locale: Locale): Promise<Slug[]> {
    const directory = join(process.cwd(), `src/features/blog/infrastructure/articles/${locale}`)
    const files = fs.readdirSync(directory)
    return files.map(x => Slug.fromValue(x.slice(0, x.length - 3)))
  }
}

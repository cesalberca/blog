import { Datetime } from '../../domain/datetime'
import type { ArticleDto } from './article-dto'
import type { Locale } from '../../domain/language/locale'
import { Article } from '../../domain/articles/article'
import type { ArticlesRepository } from '../../domain/articles/articles-repository'
import { Id } from '../../domain/id'
import { Markdown } from '../../domain/markdown'
import { TranslationService } from '../../domain/translation-service'
import { Injectable } from '../../domain/types/injectable'
import { articles } from './articles'
import frontMatter from 'front-matter'
import { join } from 'path'
import fs from 'fs'

@Injectable()
export class ArticlesFileRepository implements ArticlesRepository {
  constructor(private readonly translationService: TranslationService) {}

  async findOneByLocale(id: Id, locale: Locale): Promise<Article> {
    const fullPath = join(
      process.cwd(),
      `src/features/blog/infrastructure/articles/${this.translationService.toLiteral(locale)}/${id.value}.md`,
    )
    const article: ArticleDto = frontMatter(fs.readFileSync(fullPath, 'utf8'))
    return Article.create({
      id,
      body: Markdown.fromValue(article.body),
      date: Datetime.fromString(article.attributes.date),
      title: article.attributes.title,
      locale: this.translationService.toLocale(article.attributes.locale),
      image: join(process.cwd(), `src/features/blog/infrastructure/articles/images/${article.attributes.image}`),
    })
  }

  async findAllByLocale(locale: Locale): Promise<Article[]> {
    return Promise.all(articles.map(id => this.findOneByLocale(Id.fromValue(id), locale)))
  }

  async findPostSlugs(locale: Locale): Promise<{ id: string; slug: string }[]> {
    const directory = join(process.cwd(), `./${this.translationService.toLiteral(locale)}`)
    const files = fs.readdirSync(directory)
    return files.map(x => {
      const fileContents = fs.readFileSync(join(directory, x), 'utf-8')
      const articleDto: ArticleDto = frontMatter(fileContents)
      return { id: x, slug: articleDto.attributes.title }
    })
  }
}

import { Command } from '../../infraestructure/Command'
import { Article, ArticlesRepository } from '../../domain/articles'
import { Id } from '../../domain'
import { Locale, Translator } from '../../domain/language'
import { UseCaseDecorator } from './UseCaseDecorator'
import { ArticlesFileRepository } from '../../infraestructure/articles/ArticlesFileRepository'
import { FileLoader } from '../../infraestructure/FileLoader'
import { TranslationService } from '../../domain/TranslationService'

export class GetArticle implements Command<Article> {
  private constructor(
    private readonly articlesRepository: ArticlesRepository,
    private readonly id: Id,
    private readonly locale: Locale
  ) {}

  public async execute(): Promise<Article> {
    return this.articlesRepository.findOneByLocale(this.id, this.locale)
  }

  public static create(context: { id: Id; locale: Locale }) {
    return UseCaseDecorator.decorate(
      new GetArticle(
        new ArticlesFileRepository(
          FileLoader.create(),
          TranslationService.create(Translator.create())
        ),
        context.id,
        context.locale
      )
    )
  }
}

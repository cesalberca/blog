import { Command } from '../../infraestructure/Command'
import { Article, ArticlesRepository } from '../../domain/articles'
import { Locale, Translator } from '../../domain/language'
import { ArticlesFileRepository } from '../../infraestructure/articles/ArticlesFileRepository'
import { FileLoader } from '../../infraestructure/FileLoader'
import { TranslationService } from '../../domain/TranslationService'
import { UseCaseDecorator } from './UseCaseDecorator'

export class GetAllArticles implements Command<Article[]> {
  private constructor(
    private readonly articlesRepository: ArticlesRepository,
    private readonly locale: Locale
  ) {}

  public async execute(): Promise<Article[]> {
    return this.articlesRepository.findAllByLocale(this.locale)
  }

  public static create(context: { locale: Locale }) {
    return UseCaseDecorator.decorate(
      new GetAllArticles(
        new ArticlesFileRepository(
          FileLoader.create(),
          TranslationService.create(Translator.create())
        ),
        context.locale
      )
    )
  }
}

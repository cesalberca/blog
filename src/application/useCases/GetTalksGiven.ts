import { Talk } from '../../domain/talks'
import { Command } from '../../infraestructure/Command'
import { TalksRepository } from '../../domain/talks/TalksRepository'
import { Locale, Translator } from '../../domain/language'
import { TalksFileRepository } from '../../infraestructure/talks/TalksFileRepository'
import { FileLoader } from '../../infraestructure/FileLoader'
import { TranslationService } from '../../domain/TranslationService'
import { UseCaseDecorator } from './UseCaseDecorator'

export class GetTalksGiven implements Command<Talk[]> {
  private constructor(
    private readonly talksRepository: TalksRepository,
    private readonly locale: Locale
  ) {}

  public async execute(): Promise<Talk[]> {
    return this.talksRepository.findAllByLocale(this.locale)
  }

  public static create(context: { locale: Locale }) {
    return UseCaseDecorator.decorate(
      new GetTalksGiven(
        new TalksFileRepository(
          FileLoader.create(),
          TranslationService.create(Translator.create())
        ),
        context.locale
      )
    )
  }
}

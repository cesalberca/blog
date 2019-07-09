import { Talk } from '../../domain/talks'
import { Command } from '../../infraestructure/Command'
import { TalksRepository } from '../../domain/talks/TalksRepository'
import { Locale } from '../../domain/language'
import { TalksFileRepository } from '../../infraestructure/talks/TalksFileRepository'
import { UseCaseDecorator } from './UseCaseDecorator'

export class GetTalksGiven implements Command<Talk[]> {
  public constructor(
    private readonly talksRepository: TalksRepository,
    private readonly locale: Locale
  ) {}

  public async execute(): Promise<Talk[]> {
    return this.talksRepository.findAllByLocale(this.locale)
  }

  public static create(context: { locale: Locale }) {
    return UseCaseDecorator.create().decorate(
      new GetTalksGiven(TalksFileRepository.create(), context.locale)
    )
  }
}

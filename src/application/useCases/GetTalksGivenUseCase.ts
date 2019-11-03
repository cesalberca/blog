import { Talk } from '../../domain/talks'
import { Command } from '../../infraestructure/Command'
import { TalksRepository } from '../../domain/talks/TalksRepository'
import { Locale } from '../../domain/language'
import { TalksFileRepository } from '../../infraestructure/talks/TalksFileRepository'
import { UseCaseDecorator } from './UseCaseDecorator'

export class GetTalksGivenUseCase implements Command<Talk[]> {
  constructor(private readonly talksRepository: TalksRepository, private readonly locale: Locale) {}

  async execute(): Promise<Talk[]> {
    return this.talksRepository.findAllByLocale(this.locale)
  }

  static create(context: { locale: Locale }) {
    return UseCaseDecorator.create().decorate(
      new GetTalksGivenUseCase(TalksFileRepository.create(), context.locale)
    )
  }
}

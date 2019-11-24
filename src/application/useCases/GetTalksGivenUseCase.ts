import { Command } from '../../infraestructure/Command'
import { TalksRepository } from '../../domain/talks/TalksRepository'
import { TYPES } from '../../types'
import { UseCaseDecorator } from './UseCaseDecorator'
import { injectable, inject } from 'inversify'
import { Locale } from '../../domain/language/Locale'
import { Talk } from '../../domain/talks/Talk'

@injectable()
export class GetTalksGivenUseCase implements Command<Talk[], { locale: Locale }> {
  constructor(
    @inject(TYPES.TALKS_REPOSITORY_TYPE) private readonly talksRepository: TalksRepository,
    private readonly useCaseDecorator: UseCaseDecorator
  ) {
    return this.useCaseDecorator.decorate<GetTalksGivenUseCase>(this)
  }

  async execute({ locale }: { locale: Locale }): Promise<Talk[]> {
    return this.talksRepository.findAllByLocale(locale)
  }
}

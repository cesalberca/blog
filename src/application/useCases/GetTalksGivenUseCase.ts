import { Talk } from '../../domain/talks'
import { Command } from '../../infraestructure/Command'
import { TalksRepository } from '../../domain/talks/TalksRepository'
import { Locale } from '../../domain/language'
import { Inject } from '../../Inject'
import { TALKS_REPOSITORY_TYPE } from '../../types'
import { UseCaseDecorator } from './UseCaseDecorator'
import { Injectable } from '../../Injectable'

@Injectable()
export class GetTalksGivenUseCase implements Command<Talk[], { locale: Locale }> {
  constructor(
    @Inject(TALKS_REPOSITORY_TYPE) private readonly talksRepository: TalksRepository,
    private readonly useCaseDecorator: UseCaseDecorator
  ) {
    return this.useCaseDecorator.decorate<GetTalksGivenUseCase>(this)
  }

  async execute({ locale }: { locale: Locale }): Promise<Talk[]> {
    return this.talksRepository.findAllByLocale(locale)
  }
}

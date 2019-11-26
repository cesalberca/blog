import { Command } from '../../domain/Command'
import { TalksRepository } from '../../domain/talks/TalksRepository'
import { TYPES } from '../../types'
import { inject, injectable } from 'inversify'
import { Locale } from '../../domain/language/Locale'
import { Talk } from '../../domain/talks/Talk'

@injectable()
export class GetTalksGivenUseCase implements Command<Talk[], { locale: Locale }> {
  constructor(
    @inject(TYPES.TALKS_REPOSITORY_TYPE) private readonly talksRepository: TalksRepository
  ) {}

  async execute({ locale }: { locale: Locale }): Promise<Talk[]> {
    return this.talksRepository.findAllByLocale(locale)
  }
}

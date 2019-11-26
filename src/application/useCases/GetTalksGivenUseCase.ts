import { Command } from '../../domain/Command'
import { TalksRepository } from '../../domain/talks/TalksRepository'
import { TYPES } from '../../types'
import { Locale } from '../../domain/language/Locale'
import { Talk } from '../../domain/talks/Talk'
import { Injectable } from '../../injectable'
import { Inject } from '../../inject'

@Injectable()
export class GetTalksGivenUseCase implements Command<Talk[], { locale: Locale }> {
  constructor(@Inject(TYPES.TALKS_REPOSITORY) private readonly talksRepository: TalksRepository) {}

  async execute({ locale }: { locale: Locale }): Promise<Talk[]> {
    return this.talksRepository.findAllByLocale(locale)
  }
}

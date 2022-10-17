import type { UseCase } from '../../../core/use-case/use-case'
import type { TalksRepository } from '../domain/talks-repository'
import { Injectable } from '../../../core/dependency-injection/injectable'
import { Inject } from '../../../core/dependency-injection/inject'
import { TYPES } from '../../../types'
import type { Talk } from '../domain/talk'
import type { Locale } from '../../../core/i18n/locale'

@Injectable()
export class GetTalksGivenUseCase implements UseCase<Talk[], { locale: Locale }> {
  constructor(@Inject(TYPES.TALKS_REPOSITORY) private readonly talksRepository: TalksRepository) {}

  execute(params: { locale: Locale }): Promise<Talk[]> {
    return this.talksRepository.findAllByLocale(params.locale)
  }
}

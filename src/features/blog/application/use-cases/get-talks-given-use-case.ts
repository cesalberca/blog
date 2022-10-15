import type { UseCase } from '../../domain/types/use-case'
import type { TalksRepository } from '../../domain/talks/talks-repository'
import { Injectable } from '../../domain/types/injectable'
import { Inject } from '../../domain/types/inject'
import { TYPES } from '../../../../types'
import type { Talk } from '../../domain/talks/talk'
import type { Locale } from '../../../../core/i18n/locale'

@Injectable()
export class GetTalksGivenUseCase implements UseCase<Talk[], { locale: Locale }> {
  constructor(@Inject(TYPES.TALKS_REPOSITORY) private readonly talksRepository: TalksRepository) {}

  execute(params: { locale: Locale }): Promise<Talk[]> {
    return this.talksRepository.findAllByLocale(params.locale)
  }
}

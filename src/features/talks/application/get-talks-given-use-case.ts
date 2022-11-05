import type { UseCase } from '../../../core/use-case/use-case'
import type { TalksRepository } from '../domain/talks-repository'
import { Injectable } from '../../../core/dependency-injection/injectable'
import { Inject } from '../../../core/dependency-injection/inject'
import { TYPES } from '../../../core/dependency-injection/types'
import type { Talk } from '../domain/talk'
import type { Locale } from '../../../core/i18n/locale'
import { TalksOrderer } from '../domain/talks-orderer'

@Injectable()
export class GetTalksGivenUseCase implements UseCase<Talk[], { locale: Locale }> {
  constructor(
    @Inject(TYPES.TALKS_REPOSITORY) private readonly talksRepository: TalksRepository,
    private readonly talksOrderer: TalksOrderer,
  ) {}

  async execute(params: { locale: Locale }): Promise<Talk[]> {
    const talks = await this.talksRepository.findAllByLocale(params.locale)
    return this.talksOrderer.sort(talks)
  }
}

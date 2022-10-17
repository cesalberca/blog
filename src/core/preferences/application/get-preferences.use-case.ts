import type { UseCase } from '../../use-case/use-case'
import { Injectable } from '../../dependency-injection/injectable'
import type { Preferences } from '../domain/preferences'
import type { PreferencesRepository } from '../domain/preferences-repository'
import { TYPES } from '../../../types'
import { Inject } from '../../dependency-injection/inject'

@Injectable()
export class GetPreferencesUseCase implements UseCase<Preferences> {
  constructor(@Inject(TYPES.PREFERENCES_REPOSITORY) private readonly preferencesRepository: PreferencesRepository) {}

  execute(): Promise<Preferences> {
    return this.preferencesRepository.get()
  }
}

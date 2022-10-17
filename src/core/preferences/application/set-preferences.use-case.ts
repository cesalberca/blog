import type { UseCase } from '../../use-case/use-case'
import { Injectable } from '../../dependency-injection/injectable'
import type { Preferences } from '../domain/preferences'
import type { PreferencesRepository } from '../domain/preferences-repository'
import { TYPES } from '../../../types'
import { Inject } from '../../dependency-injection/inject'

@Injectable()
export class SetPreferencesUseCase implements UseCase<void, Preferences> {
  constructor(@Inject(TYPES.PREFERENCES_REPOSITORY) private readonly preferencesRepository: PreferencesRepository) {}

  execute(preferences: Preferences): Promise<void> {
    return this.preferencesRepository.set(preferences)
  }
}

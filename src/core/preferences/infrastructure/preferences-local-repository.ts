import type { Preferences } from '../domain/preferences'
import type { PreferencesRepository } from '../domain/preferences-repository'
import { Inject } from '../../dependency-injection/inject'
import { TYPES } from '../../../types'
import { Injectable } from '../../dependency-injection/injectable'
import { Theme } from '../../../features/theme/domain/theme'

@Injectable()
export class PreferencesLocalRepository implements PreferencesRepository {
  private static readonly PREFERENCES_STORAGE_KEY = 'preferences'

  constructor(@Inject(TYPES.STORAGE) private readonly storage: Storage) {}

  async get(): Promise<Preferences> {
    const stringifiedPreferences = this.storage.getItem(PreferencesLocalRepository.PREFERENCES_STORAGE_KEY)

    if (stringifiedPreferences === null) {
      return {
        theme: Theme.LIGHT,
      }
    }

    return JSON.parse(stringifiedPreferences)
  }

  async set(preferences: Preferences): Promise<void> {
    return this.storage.setItem(PreferencesLocalRepository.PREFERENCES_STORAGE_KEY, JSON.stringify(preferences))
  }
}

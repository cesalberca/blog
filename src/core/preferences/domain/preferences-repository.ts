import type { Preferences } from './preferences'

export interface PreferencesRepository {
  set(preferences: Preferences): Promise<void>
  get(): Promise<Preferences>
}

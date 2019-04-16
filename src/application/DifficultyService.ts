import { TranslationError } from '../infraestructure/language'
import { Difficulty } from '../domain/talks/Difficulty'

export class DifficultyService {
  public toDifficulty(string: string): Difficulty {
    switch (string) {
      case 'Advanced':
        return Difficulty.ADVANCED
      case 'Intermediate':
        return Difficulty.INTERMEDIATE
      case 'Easy':
        return Difficulty.EASY
      default:
        throw new TranslationError(`String ${string} could not be mapped to a difficulty`)
    }
  }

  public static create() {
    return new DifficultyService()
  }
}

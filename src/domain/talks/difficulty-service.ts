import { Difficulty } from './Difficulty'
import { TranslationError } from '../language/translation-error'

export class DifficultyService {
  toDifficulty(string: string): Difficulty {
    switch (string) {
      case 'Advanced':
        return Difficulty.ADVANCED
      case 'Intermediate':
        return Difficulty.INTERMEDIATE
      case 'Beginner':
        return Difficulty.EASY
      default:
        throw new TranslationError(`String ${string} could not be mapped to a difficulty`)
    }
  }

  toString(difficulty: Difficulty) {
    switch (difficulty) {
      case Difficulty.ADVANCED:
        return 'talks_talkDifficultyAdvanced' as const
      case Difficulty.INTERMEDIATE:
        return 'talks_talkDifficultyIntermediate' as const
      case Difficulty.EASY:
        return 'talks_talkDifficultyEasy' as const
    }
  }

  static create() {
    return new DifficultyService()
  }
}

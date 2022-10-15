import { Difficulty } from './difficulty'
import { Injectable } from '../../../core/dependency-injection/injectable'

@Injectable()
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
        throw new Error(`String ${string} could not be mapped to a difficulty`)
    }
  }

  toString(difficulty: Difficulty) {
    switch (difficulty) {
      case Difficulty.ADVANCED:
        return 'talks.talkDifficultyAdvanced' as const
      case Difficulty.INTERMEDIATE:
        return 'talks.talkDifficultyIntermediate' as const
      case Difficulty.EASY:
        return 'talks.talkDifficultyEasy' as const
    }
  }
}

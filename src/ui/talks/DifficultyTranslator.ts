import { Difficulty } from '../../domain/talks/Difficulty'

export class DifficultyTranslator {
  public translate(difficulty: Difficulty) {
    switch (difficulty) {
      case Difficulty.ADVANCED:
        return 'talks_talkDifficultyAdvanced' as const
      case Difficulty.INTERMEDIATE:
        return 'talks_talkDifficultyIntermediate' as const
      case Difficulty.EASY:
        return 'talks_talkDifficultyEasy' as const
    }
  }

  public static create() {
    return new DifficultyTranslator()
  }
}

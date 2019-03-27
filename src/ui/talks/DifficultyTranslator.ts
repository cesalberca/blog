import { Difficulty } from '../../domain/talks/Difficulty'

export class DifficultyTranslator {
  public translate(difficulty: Difficulty): string {
    switch (difficulty) {
      case Difficulty.ADVANCED:
        return 'talks_talkDifficultyAdvanced'
      case Difficulty.INTERMEDIATE:
        return 'talks_talkDifficultyIntermediate'
      case Difficulty.EASY:
        return 'talks_talkDifficultyEasy'
    }
  }
}

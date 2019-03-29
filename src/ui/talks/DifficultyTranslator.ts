import { Difficulty } from '../../domain/talks/Difficulty'
import { TranslationIdentifiers } from '../../infraestructure/language'

export class DifficultyTranslator {
  public translate(difficulty: Difficulty): keyof TranslationIdentifiers {
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

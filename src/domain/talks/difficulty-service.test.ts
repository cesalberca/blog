import { DifficultyService } from './difficulty-service'
import { Difficulty } from './Difficulty'

describe('DifficultyService', () => {
  let difficultyService: DifficultyService

  beforeEach(() => {
    difficultyService = new DifficultyService()
  })

  it('should map string to difficulty', () => {
    const expected = Difficulty.ADVANCED

    const actual = difficultyService.toDifficulty('Advanced')

    expect(actual).toBe(expected)
  })

  it('should throw an error when difficulty could not be mapped', () => {
    expect(() => {
      const nonExistentDifficulty = 'foo'
      difficultyService.toDifficulty(nonExistentDifficulty)
    }).toThrowError(new Error('String foo could not be mapped to a difficulty'))
  })
})

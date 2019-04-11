import { UseCaseFactory } from '../UseCaseFactory'
import { GetArticle } from '../GetArticle'
import { GetAllArticles } from '../GetAllArticles'
import { GetTalksGiven } from '../GetTalksGiven'
import { UseCase } from '../UseCase'

describe('UseCaseFactory', () => {
  it('should create an instance of all use cases', () => {
    const getArticle = UseCaseFactory.get(UseCase.GET_ARTICLE, { id: 1, locale: 0 })
    const getAllArticles = UseCaseFactory.get(UseCase.GET_ALL_ARTICLES, { locale: 0 })
    const getTalksGiven = UseCaseFactory.get(UseCase.GET_TALKS_GIVEN)

    expect(getArticle).toBeInstanceOf(GetArticle)
    expect(getAllArticles).toBeInstanceOf(GetAllArticles)
    expect(getTalksGiven).toBeInstanceOf(GetTalksGiven)
  })

  it('should throw an error if an use case is not found', () => {
    const nonExistingUseCase = 'fooBarBaz'

    expect(() => {
      UseCaseFactory.get((nonExistingUseCase as unknown) as UseCase)
    }).toThrowError(new Error('Use case "fooBarBaz" not found'))
  })
})

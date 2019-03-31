import { UseCaseFactory } from '../UseCaseFactory'
import { GetArticle } from '../GetArticle'
import { GetAllArticles } from '../GetAllArticles'
import { GetTalksGiven } from '../GetTalksGiven'
import { UseCase } from '../UseCase'

describe('UseCaseFactory', () => {
  it('should create an instance of all use cases', () => {
    const getArticle = UseCaseFactory.get('GetArticle', { id: 1, locale: 0 })
    const getAllArticles = UseCaseFactory.get('GetAllArticles', { locale: 0 })
    const getTalksGiven = UseCaseFactory.get('GetTalksGiven')

    expect(getArticle).toBeInstanceOf(GetArticle)
    expect(getAllArticles).toBeInstanceOf(GetAllArticles)
    expect(getTalksGiven).toBeInstanceOf(GetTalksGiven)
  })

  it('should throw an error if an use case is not found', () => {
    const nonExistingUseCase = 'fooBarBaz'

    expect(() => {
      UseCaseFactory.get(nonExistingUseCase as UseCase)
    }).toThrowError(new Error('Use case "fooBarBaz" not found'))
  })
})

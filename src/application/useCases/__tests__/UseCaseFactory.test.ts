import { UseCaseFactory } from '../UseCaseFactory'
import { UseCase } from '../UseCase'

describe('UseCaseFactory', () => {
  it('should create an instance of all use cases', () => {
    const getArticle = UseCaseFactory.get(UseCase.GET_ARTICLE, { id: 1, locale: 0 })
    const getAllArticles = UseCaseFactory.get(UseCase.GET_ALL_ARTICLES, { locale: 0 })
    const getTalksGiven = UseCaseFactory.get(UseCase.GET_TALKS_GIVEN, { locale: 0 })

    expect(getArticle).toMatchSnapshot()
    expect(getAllArticles).toMatchSnapshot()
    expect(getTalksGiven).toMatchSnapshot()
  })

  it('should throw an error if an use case is not found', () => {
    const nonExistingUseCase = 'fooBarBaz'

    expect(() => {
      UseCaseFactory.get((nonExistingUseCase as unknown) as UseCase)
    }).toThrowError(new Error('Use case "fooBarBaz" not found'))
  })
})

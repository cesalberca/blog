import { GetArticleUseCase } from '../GetArticleUseCase'
import { Locale } from '../../../domain/language/Locale'
import { ArticlesRepository } from '../../../domain/articles/ArticlesRepository'
import { Id } from '../../../domain/Id'
import { UseCaseDecorator } from '../UseCaseDecorator'
import { instance, mock, verify } from 'ts-mockito'

describe('GetArticleUseCase', () => {
  it('should get an article', async () => {
    const { getArticleUseCase, articlesRepository } = setup()

    await getArticleUseCase.execute({ locale: Locale.EN, id: Id.fromValue('1') })

    verify(articlesRepository.findOneByLocale(Id.fromValue('1'), Locale.EN))
  })
})

function setup() {
  const useCaseDecorator = mock(UseCaseDecorator)
  const articlesRepository = mock<ArticlesRepository>()
  return {
    articlesRepository,
    getArticleUseCase: new GetArticleUseCase(
      instance(articlesRepository),
      instance(useCaseDecorator)
    )
  }
}

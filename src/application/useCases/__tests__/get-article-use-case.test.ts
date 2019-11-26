import { GetArticleUseCase } from '../get-article-use-case'
import { Locale } from '../../../domain/language/locale'
import { ArticlesRepository } from '../../../domain/articles/articles-repository'
import { Id } from '../../../domain/id'
import { instance, mock, verify } from 'ts-mockito'

describe('GetArticleUseCase', () => {
  it('should get an article', async () => {
    const { getArticleUseCase, articlesRepository } = setup()

    await getArticleUseCase.execute({ locale: Locale.EN, id: Id.fromValue('1') })

    verify(articlesRepository.findOneByLocale(Id.fromValue('1'), Locale.EN))
  })
})

function setup() {
  const articlesRepository = mock<ArticlesRepository>()
  return {
    articlesRepository,
    getArticleUseCase: new GetArticleUseCase(instance(articlesRepository))
  }
}

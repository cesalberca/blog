import { GetArticleUseCase } from './get-article-use-case'
import type { ArticlesRepository } from '../domain/articles-repository'
import { Id } from '../../../core/id'
import { instance, mock, verify } from 'ts-mockito'
import { Locale } from '../../../core/i18n/locale'

describe('GetArticleUseCase', () => {
  it('should get an article', async () => {
    const { getArticleUseCase, articlesRepository } = setup()

    await getArticleUseCase.execute({ id: Id.fromValue('1'), locale: Locale.EN })

    verify(articlesRepository.findOneByLocale(Id.fromValue('1'), Locale.EN))
  })
})

function setup() {
  const articlesRepository = mock<ArticlesRepository>()
  return {
    articlesRepository,
    getArticleUseCase: new GetArticleUseCase(instance(articlesRepository)),
  }
}

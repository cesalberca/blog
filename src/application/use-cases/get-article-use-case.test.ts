import { GetArticleUseCase } from './get-article-use-case'
import { Locale } from '../../domain/language/locale'
import { ArticlesRepository } from '../../domain/articles/articles-repository'
import { Id } from '../../domain/id'
import { instance, mock, verify, when } from 'ts-mockito'
import { Theme } from '../state/theme'
import { Store } from '../state/store'

describe('GetArticleUseCase', () => {
  it('should get an article', async () => {
    const { getArticleUseCase, articlesRepository } = setup()

    await getArticleUseCase.execute({ id: Id.fromValue('1') })

    verify(articlesRepository.findOneByLocale(Id.fromValue('1'), Locale.EN))
  })
})

function setup() {
  const articlesRepository = mock<ArticlesRepository>()
  const store = mock(Store)
  when(store.value()).thenReturn({ locale: Locale.EN, theme: Theme.DARK })
  return {
    articlesRepository,
    getArticleUseCase: new GetArticleUseCase(instance(articlesRepository), instance(store))
  }
}

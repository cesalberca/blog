import { GetArticleUseCase } from './get-article-use-case'
import { Locale } from '../../domain/language/locale'
import { ArticlesRepository } from '../../domain/articles/articles-repository'
import { Id } from '../../domain/id'
import { instance, mock, verify, when } from 'ts-mockito'
import { StateManager } from '../state/state-manager'
import { Theme } from '../../ui/theme/theme'

describe('GetArticleUseCase', () => {
  it('should get an article', async () => {
    const { getArticleUseCase, articlesRepository } = setup()

    await getArticleUseCase.execute({ id: Id.fromValue('1') })

    verify(articlesRepository.findOneByLocale(Id.fromValue('1'), Locale.EN))
  })
})

function setup() {
  const articlesRepository = mock<ArticlesRepository>()
  const stateManager = mock<StateManager>()
  when(stateManager.state).thenReturn({ locale: Locale.EN, shouldReload: false, theme: Theme.DARK })
  return {
    articlesRepository,
    getArticleUseCase: new GetArticleUseCase(instance(articlesRepository), instance(stateManager))
  }
}

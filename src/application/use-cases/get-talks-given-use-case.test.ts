import { GetTalksGivenUseCase } from './get-talks-given-use-case'
import { TalksRepository } from '../../domain/talks/talks-repository'
import { Locale } from '../../domain/language/locale'
import { instance, mock, verify, when } from 'ts-mockito'
import { StateManager } from '../state/state-manager'
import { Theme } from '../../ui/theme/theme'

describe('GetTalksGivenUseCase', () => {
  it('should get all talks given', async () => {
    const { getTalksGivenUseCase, talksRepository } = setup()

    await getTalksGivenUseCase.execute()

    verify(talksRepository.findAllByLocale(Locale.EN)).once()
  })
})

function setup() {
  const talksRepository = mock<TalksRepository>()
  const stateManager = mock<StateManager>()
  when(stateManager.state).thenReturn({ locale: Locale.EN, shouldReload: false, theme: Theme.DARK })
  return {
    talksRepository,
    getTalksGivenUseCase: new GetTalksGivenUseCase(
      instance(talksRepository),
      instance(stateManager)
    )
  }
}

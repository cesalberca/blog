import { GetTalksGivenUseCase } from './get-talks-given-use-case'
import { TalksRepository } from '../../domain/talks/talks-repository'
import { Locale } from '../../domain/language/locale'
import { instance, mock, verify, when } from 'ts-mockito'
import { Store } from '../state/store'
import { Theme } from '../state/theme'
import { of } from 'rxjs'
import { TalksMother } from '../../domain/talks/talks-mother'

describe('GetTalksGivenUseCase', () => {
  it('should get all talks given', async () => {
    const { getTalksGivenUseCase, talksRepository } = setup()

    await getTalksGivenUseCase.execute().toPromise()

    verify(talksRepository.findAllByLocale(Locale.EN)).once()
  })
})

function setup() {
  const talksRepository = mock<TalksRepository>()
  const store = mock(Store)
  when(store.observable()).thenReturn(of({ locale: Locale.EN, theme: Theme.DARK }))
  when(talksRepository.findAllByLocale(Locale.EN)).thenResolve(TalksMother.getTalksGiven())
  return {
    talksRepository,
    getTalksGivenUseCase: new GetTalksGivenUseCase(instance(talksRepository), instance(store))
  }
}

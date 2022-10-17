import { GetTalksGivenUseCase } from './get-talks-given-use-case'
import { instance, mock, verify, when } from 'ts-mockito'
import { TalksMother } from '../domain/talks-mother'
import { Locale } from '../../../core/i18n/locale'
import type { TalksRepository } from '../domain/talks-repository'

describe('GetTalksGivenUseCase', () => {
  it('should get all talks given', async () => {
    const { getTalksGivenUseCase, talksRepository } = setup()

    await getTalksGivenUseCase.execute({ locale: Locale.EN })

    verify(talksRepository.findAllByLocale(Locale.EN)).once()
  })
})

function setup() {
  const talksRepository = mock<TalksRepository>()
  when(talksRepository.findAllByLocale(Locale.EN)).thenResolve(TalksMother.getTalksGiven())
  return {
    talksRepository,
    getTalksGivenUseCase: new GetTalksGivenUseCase(instance(talksRepository)),
  }
}

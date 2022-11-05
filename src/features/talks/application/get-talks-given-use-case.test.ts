import { GetTalksGivenUseCase } from './get-talks-given-use-case'
import { anything, instance, mock, when } from 'ts-mockito'
import { TalksMother } from '../domain/talks-mother'
import { Locale } from '../../../core/i18n/locale'
import type { TalksRepository } from '../domain/talks-repository'
import { TalksOrderer } from '../domain/talks-orderer'

describe('GetTalksGivenUseCase', () => {
  it('should get all talks given', async () => {
    const { getTalksGivenUseCase, talksRepository, talksOrderer } = setup()
    when(talksRepository.findAllByLocale(Locale.EN)).thenResolve([TalksMother.advancedJavascriptPatterns()])
    when(talksOrderer.sort(anything())).thenReturn([TalksMother.advancedJavascriptPatterns()])

    const actual = await getTalksGivenUseCase.execute({ locale: Locale.EN })

    expect(actual[0].title).toBe('Advanced JavaScript Patterns')
  })
})

function setup() {
  const talksRepository = mock<TalksRepository>()
  const talksOrderer = mock(TalksOrderer)

  return {
    talksRepository,
    talksOrderer,
    getTalksGivenUseCase: new GetTalksGivenUseCase(instance(talksRepository), instance(talksOrderer)),
  }
}

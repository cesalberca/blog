import { GetTalksGivenUseCase } from '../GetTalksGivenUseCase'
import { TalksRepository } from '../../../domain/talks/TalksRepository'
import { Locale } from '../../../domain/language/Locale'
import { instance, mock, verify } from 'ts-mockito'

describe('GetTalksGivenUseCase', () => {
  it('should get all talks given', async () => {
    const { getTalksGivenUseCase, talksRepository } = setup()

    await getTalksGivenUseCase.execute({ locale: Locale.ES })

    verify(talksRepository.findAllByLocale(Locale.ES)).once()
  })
})

function setup() {
  const talksRepository = mock<TalksRepository>()
  return {
    talksRepository,
    getTalksGivenUseCase: new GetTalksGivenUseCase(instance(talksRepository))
  }
}

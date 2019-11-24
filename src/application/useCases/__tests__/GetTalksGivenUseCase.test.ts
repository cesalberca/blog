import { GetTalksGivenUseCase } from '../GetTalksGivenUseCase'
import { TalksMockRepository } from '../../../domain/talks/TalksMockRepository'
import { TalksRepository } from '../../../domain/talks/TalksRepository'
import { Locale } from '../../../domain/language/Locale'

jest.mock('../UseCaseDecorator')

describe('GetTalksGivenUseCase', () => {
  let getTalksGiven: GetTalksGivenUseCase
  let mock: TalksRepository

  beforeEach(() => {
    mock = new TalksMockRepository()
    ;(mock.findAllByLocale as jest.Mock).mockResolvedValue([])
    getTalksGiven = new GetTalksGivenUseCase(mock, Locale.EN)
  })

  it('should get all talks given', async () => {
    expect.assertions(1)

    await getTalksGiven.execute()

    expect(mock.findAllByLocale).toHaveBeenCalledWith(0)
  })
})

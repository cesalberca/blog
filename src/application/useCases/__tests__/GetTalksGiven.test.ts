import { GetTalksGiven } from '../GetTalksGiven'
import { Locale } from '../../../domain/language'
import { TalksMockRepository } from '../../../domain/talks/TalksMockRepository'
import { TalksRepository } from '../../../domain/talks/TalksRepository'

jest.mock('../UseCaseDecorator')

describe('GetTalksGiven', () => {
  let getTalksGiven: GetTalksGiven
  let mock: TalksRepository

  beforeEach(() => {
    mock = new TalksMockRepository()
    ;(mock.findAllByLocale as jest.Mock).mockResolvedValue([])
    getTalksGiven = new GetTalksGiven(mock, Locale.EN)
  })

  it('should get all talks given', async () => {
    expect.assertions(1)

    await getTalksGiven.execute()

    expect(mock.findAllByLocale).toHaveBeenCalledWith(0)
  })
})

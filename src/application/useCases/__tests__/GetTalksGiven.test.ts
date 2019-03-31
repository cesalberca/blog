import { GetTalksGiven } from '../GetTalksGiven'
import { TalksMother } from '../../../domain/talks'

jest.mock('../../../infraestructure/articles/ArticlesFileRepository')

describe('GetTalksGiven', () => {
  it('should get all talks given', async () => {
    expect.assertions(1)
    const getTalksGiven = new GetTalksGiven()

    const actual = await getTalksGiven.execute()

    expect(actual).toEqual(TalksMother.getTalksGiven())
  })
})

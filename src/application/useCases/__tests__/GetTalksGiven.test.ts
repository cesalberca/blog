import { GetTalksGiven } from '../GetTalksGiven'
import { Locale } from '../../../domain/language'
import { TalksFileRepository } from '../../../infraestructure/talks/TalksFileRepository'

jest.mock('../../../infraestructure/talks/TalksFileRepository')
jest.mock('../UseCaseDecorator')

describe('GetTalksGiven', () => {
  it('should get all talks given', async () => {
    expect.assertions(1)
    const getTalksGiven = GetTalksGiven.create({ locale: Locale.DEFAULT })

    await getTalksGiven.execute()

    expect(
      (TalksFileRepository as jest.Mock).mock.instances[0].findAllByLocale
    ).toHaveBeenCalledWith(0)
  })
})

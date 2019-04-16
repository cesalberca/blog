import { GetTalksGiven } from '../GetTalksGiven'
import { FileLoader } from '../../../infraestructure/FileLoader'
import { TranslationService } from '../../TranslationService'
import { Locale, Translator } from '../../../infraestructure/language'
import { TalksFileRepository } from '../../../infraestructure/talks/TalksFileRepository'

jest.mock('../../../infraestructure/talks/TalksFileRepository')

describe('GetTalksGiven', () => {
  it('should get all talks given', async () => {
    expect.assertions(1)
    const getTalksGiven = new GetTalksGiven(
      new TalksFileRepository(FileLoader.create(), TranslationService.create(Translator.create())),
      Locale.DEFAULT
    )

    await getTalksGiven.execute()

    expect(
      (TalksFileRepository as jest.Mock).mock.instances[0].findAllByLocale
    ).toHaveBeenCalledWith(0)
  })
})

import { instance, mock, verify, when } from 'ts-mockito'
import { FileLoader } from '../../domain/file-loader'
import { TranslationService } from '../../domain/translation-service'
import { ArticlesFileRepository } from './articles-file-repository'
import { Locale } from '../../domain/language/locale'
import { Id } from '../../domain/id'

describe('ArticlesFileRepository', () => {
  it('should get an article by id and locale', async () => {
    const { articlesFileRepository, translationService, fileLoader } = setup()
    when(translationService.toLiteral(Locale.ES)).thenReturn('es')
    when(fileLoader.loadFrom('foo')).thenResolve('bar')

    await articlesFileRepository.findOneByLocale(Id.fromValue('foo'), Locale.ES)

    verify(fileLoader.loadFrom(`/infrastructure/articles/es/foo.md`)).once()
  })
})

function setup() {
  const fileLoader = mock(FileLoader)
  const translationService = mock(TranslationService)

  return {
    fileLoader,
    translationService,
    articlesFileRepository: new ArticlesFileRepository(
      instance(fileLoader),
      instance(translationService)
    )
  }
}

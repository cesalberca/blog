import { GetAllArticlesUseCase } from './get-all-articles-use-case'
import { ArticlesMother } from '../../domain/articles/articles-mother'
import { Locale } from '../../domain/language/locale'
import type { Article } from '../../domain/articles/article'
import type { ArticlesRepository } from '../../domain/articles/articles-repository'
import { instance, mock, verify, when } from 'ts-mockito'
import { Store } from '../state/store'
import { Theme } from '../state/theme'
import { of } from 'rxjs'

describe('GetAllArticlesUseCase', () => {
  it('should get all articles', async () => {
    const { articlesRepository, getAllArticlesUseCase } = setup()

    await getAllArticlesUseCase.execute().toPromise()

    verify(articlesRepository.findAllByLocale(Locale.EN)).once()
  })

  it('should return the articles ordered by date', async () => {
    const { getAllArticlesUseCase } = setup()

    const result = await getAllArticlesUseCase.execute().toPromise()

    expect(result[0].date.value > result[1].date.value).toBe(true)
  })
})

function setup() {
  const articlesRepository = mock<ArticlesRepository>()
  const articles: Article[] = ArticlesMother.articles()
  when(articlesRepository.findAllByLocale(Locale.EN)).thenResolve(articles)
  const store = mock(Store)
  when(store.observable()).thenReturn(of({ locale: Locale.EN, theme: Theme.DARK }))
  return {
    articlesRepository,
    getAllArticlesUseCase: new GetAllArticlesUseCase(instance(articlesRepository), instance(store)),
  }
}

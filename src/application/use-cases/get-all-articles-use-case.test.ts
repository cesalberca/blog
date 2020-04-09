import { GetAllArticlesUseCase } from './get-all-articles-use-case'
import { ArticlesMother } from '../../domain/articles/articles-mother'
import { Locale } from '../../domain/language/locale'
import { Article } from '../../domain/articles/article'
import { ArticlesRepository } from '../../domain/articles/articles-repository'
import { instance, mock, verify, when } from 'ts-mockito'
import { Store } from '../state/store'
import { Theme } from '../state/theme'

describe('GetAllArticlesUseCase', () => {
  it('should get all articles', async () => {
    const { articlesRepository, getAllArticlesUseCase } = setup()

    await getAllArticlesUseCase.execute()

    verify(articlesRepository.findAllByLocale(Locale.EN)).once()
  })

  it('should return the articles ordered by date', async () => {
    const { getAllArticlesUseCase } = setup()

    const result = await getAllArticlesUseCase.execute()

    expect(result[0].date.value > result[1].date.value).toBe(true)
  })
})

function setup() {
  const articlesRepository = mock<ArticlesRepository>()
  const articles: Article[] = ArticlesMother.getFakeArticles()
  when(articlesRepository.findAllByLocale(Locale.EN)).thenResolve(articles)
  const state = mock<Store>()
  when(state.state).thenReturn({ locale: Locale.EN, shouldReload: false, theme: Theme.DARK })
  return {
    articlesRepository,
    getAllArticlesUseCase: new GetAllArticlesUseCase(
      instance(articlesRepository),
      instance(state)
    )
  }
}

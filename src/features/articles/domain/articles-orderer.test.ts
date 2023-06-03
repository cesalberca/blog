import { ArticlesOrderer } from './articles-orderer'
import { ArticlesMother } from './articles-mother'

describe('ArticlesOrderer', () => {
  it('should sort talks by latest event given', () => {
    const { articlesOrderer } = setup()

    const actual = articlesOrderer.order(ArticlesMother.articles())

    expect(actual[0].title).toBe('Angular Jest')
  })
})

function setup() {
  return {
    articlesOrderer: new ArticlesOrderer(),
  }
}

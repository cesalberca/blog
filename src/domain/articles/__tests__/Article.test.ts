import { Article } from '../Article'
import { Id } from '../../Id'
import { Markdown } from '../../Markdown'
import { Datetime } from '../../../infraestructure/Datetime'

describe('Article', () => {
  it('should get the excerpt', () => {
    const article = Article.create({
      id: Id.fromValue('foo'),
      title: 'foo',
      body: Markdown.fromValue('foo'),
      date: Datetime.fromNow()
    })

    const excerpt = article.getExcerpt()

    expect(excerpt).toEqual({
      body: 'foo',
      date: 'March 27, 2019',
      id: Id.fromValue('foo'),
      title: 'foo'
    })
  })
})

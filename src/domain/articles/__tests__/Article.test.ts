import { Article } from '../Article'
import { Id } from '../../Id'
import { Markdown } from '../../Markdown'
import { Datetime } from '../../../infraestructure/Datetime'
import { Locale } from '../../language'

describe('Article', () => {
  it('should get the excerpt', () => {
    const article = Article.create({
      id: Id.fromValue('foo'),
      title: 'foo',
      body: Markdown.fromValue('foo'),
      date: Datetime.fromDate(new Date(2019, 2, 27)),
      locale: Locale.DEFAULT
    })

    const excerpt = article.getExcerpt()

    expect(excerpt).toEqual({
      body: '<p>foo</p>\n',
      date: 'March 27, 2019',
      id: Id.fromValue('foo'),
      title: 'foo',
      locale: 0
    })
  })

  it('should get text in the excerpt until the <!--more--> tag', () => {
    const article = Article.create({
      id: Id.fromValue('foo'),
      title: 'foo',
      body: Markdown.fromValue(`foo <!--more-->bar`),
      date: Datetime.fromDate(new Date(2019, 2, 27)),
      locale: Locale.DEFAULT
    })

    const excerpt = article.getExcerpt()

    expect(excerpt.body).toEqual('<p>foo ')
  })
})

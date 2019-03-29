import { Article } from '../Article'
import { Id } from '../../Id'
import { Markdown } from '../../Markdown'
import { Datetime } from '../../../infraestructure/Datetime'
import { ArticlesMother } from '../ArticlesMother'

describe('Article', () => {
  it('should get the excerpt', () => {
    const article = Article.create({
      id: Id.fromValue('foo'),
      title: 'foo',
      body: Markdown.fromValue('foo'),
      date: Datetime.fromValue(new Date(2019, 2, 27))
    })

    const excerpt = article.getExcerpt()

    expect(excerpt).toEqual({
      body: '<p>foo</p>\n',
      date: 'March 27, 2019',
      id: Id.fromValue('foo'),
      title: 'foo'
    })
  })

  it('should get text in the excerpt until the <!--more--> tag', () => {
    const article = ArticlesMother.getFakeArticle()

    const excerpt = article.getExcerpt()

    expect(excerpt.body)
      .toEqual(`<pre><code>    ---</code></pre><p>title: Haciendo (Vue)n frontend</p>
<h2 id="date-2019-03-29">date: 2019-03-29</h2>
<p>¿SOLID, testing, separación por capas y patrones de diseño en el frontend con Vue y TypeScript? ¿Estamos locos? No, se puede hacer y además te lo enseño en este tutorial.</p>\n`)
  })
})

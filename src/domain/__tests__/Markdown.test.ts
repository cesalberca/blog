import { Markdown } from '../Markdown'
import marked from 'marked'

jest.mock('marked')

describe('Markdown', () => {
  it('should use marked to render HTML', () => {
    const markdown = Markdown.fromValue('foo')

    markdown.toHtml()

    expect(marked).toHaveBeenCalledWith('foo')
  })

  it('should configure marked', () => {
    Markdown.fromValue('foo')

    expect(marked.setOptions).toHaveBeenCalled()
  })
})

import { Id } from '../id'

describe('Id', () => {
  it('should get the slug from the id', () => {
    const id = Id.fromValue('foo bar -_ Baz')

    const actual = id.slug

    expect(actual).toBe('foo+bar+-_+baz')
  })
})

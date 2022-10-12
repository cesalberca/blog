import { Reference } from './reference'

describe('Reference', () => {
  it('should get the value', () => {
    const reference = Reference.fromValue('foo', 'bar')

    expect(reference.value).toEqual({ title: 'foo', url: 'bar' })
  })
})

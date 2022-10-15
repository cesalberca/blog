import { Reference } from './reference'

describe('Reference', () => {
  it('should get the value', () => {
    const reference = Reference.fromValue({ title: 'foo', url: 'bar' })

    expect(reference.value).toEqual({ title: 'foo', url: 'bar' })
  })
})

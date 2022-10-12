import { EncoderService } from './encoder-service'

describe('EncoderService', () => {
  it('should encode to url like', () => {
    const service = new EncoderService()

    const actual = service.encode('foo bar Baz')

    expect(actual).toBe('foo+bar+Baz')
  })

  it('should get the slug from the id', () => {
    const service = new EncoderService()

    const actual = service.slug('Foo bar -_ Baz')

    expect(actual).toBe('foo+bar+-_+baz')
  })
})

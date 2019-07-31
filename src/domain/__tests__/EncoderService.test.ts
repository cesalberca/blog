import { EncoderService } from '../EncoderService'

describe('EncoderService', () => {
  it('should encode to url like', () => {
    const service = new EncoderService()

    const actual = service.encode('foo bar Baz')

    expect(actual).toBe('foo+bar+Baz')
  })
})

import { Length } from '../../Length'

describe('Length', () => {
  it('should create in seconds', () => {
    const length = Length.fromMinutes(60)

    expect(length.seconds).toEqual(3600)
  })

  it('should get the length in minutes', () => {
    const length = Length.fromMinutes(60)

    expect(length.minutes).toEqual(60)
  })
})

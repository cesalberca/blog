import { Datetime } from '../Datetime'

describe('Datetime', () => {
  it('should get the value', () => {
    const datetime = Datetime.fromDate(new Date(2019, 3, 4))

    const actual = datetime.value

    expect(actual).toEqual(new Date(2019, 3, 4))
  })

  it('should construct a datetime from a string', () => {
    const datetime = Datetime.fromString('2019-03-31T22:00:00.000Z')

    const actual = datetime.value

    expect(actual).toEqual(new Date(2019, 3, 1, 0, 0, 0))
  })

  it('should format correctly the date', () => {
    const datetime = Datetime.fromDate(new Date(2019, 3, 4))

    const actual = datetime.format()

    expect(actual).toEqual('April 4, 2019')
  })
})

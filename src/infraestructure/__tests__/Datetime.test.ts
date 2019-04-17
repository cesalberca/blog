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

  it('should print date', () => {
    const datetime = Datetime.fromDate(new Date(2019, 3, 4, 23, 3, 3, 1))

    const actual = datetime.toString()

    expect(actual).toEqual('2019-04-04T21:03:03.001Z')
  })

  it('should get now datetime', () => {
    const date = new Date(2019, 3, 3, 3, 3, 3, 3)
    ;(global.Date as any) = jest.fn(() => date)
    const datetime = Datetime.fromNow()

    const actual = datetime.value

    expect(actual).toEqual(new Date(2019, 3, 3, 3, 3, 3, 3))
  })
})

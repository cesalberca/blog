import { Datetime } from '../Datetime'

describe('Datetime', () => {
  it('should get the value', () => {
    const datetime = Datetime.fromValue(new Date(2019, 3, 4))

    const actual = datetime.value

    expect(actual).toEqual(new Date(2019, 3, 4))
  })

  it('should format correctly the date', () => {
    const datetime = Datetime.fromValue(new Date(2019, 3, 4))

    const actual = datetime.format()

    expect(actual).toEqual('April 4, 2019')
  })
})

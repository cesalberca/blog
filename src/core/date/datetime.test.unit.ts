import { describe, expect, it } from 'vitest'
import { Datetime } from './datetime'

describe('Datetime', () => {
  it('should get the value', () => {
    const datetime = Datetime.fromDate(new Date(2019, 3, 4, 0, 0, 0))

    const actual = datetime.value

    expect(actual).toEqual(new Date(2019, 3, 4, 0, 0, 0))
  })
})

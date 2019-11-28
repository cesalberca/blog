import { Maybe } from './maybe'

describe('Maybe', () => {
  it('should handle a value', () => {
    const value = 'test'
    const maybe = Maybe.some(value)
    const expected = 'test'

    const actual = maybe.getOrElse('')

    expect(actual).toEqual(expected)
  })

  it('should handle an undefined value', () => {
    const value = undefined
    const maybe = Maybe.fromValue<string>(value)
    const expected = 'test'

    const actual = maybe.getOrElse('test')

    expect(actual).toEqual(expected)
  })

  it('should handle a string value', () => {
    const value = 'test'
    const maybe = Maybe.fromValue(value)
    const expected = 'test'

    const actual = maybe.getOrElse('')

    expect(actual).toEqual(expected)
  })

  it('should handle an empty string value', () => {
    const value = ''
    const maybe = Maybe.fromValue(value)
    const expected = 'test'

    const actual = maybe.getOrElse('test')

    expect(actual).toEqual(expected)
  })

  it('should handle a null value', () => {
    const value = null
    const maybe = Maybe.fromValue<string>(value)
    const expected = 'test'

    const actual = maybe.getOrElse('test')

    expect(actual).toEqual(expected)
  })

  it('should handle a false value', () => {
    const value = false
    const maybe = Maybe.fromValue<boolean>(value)

    const actual = maybe.getOrElse(true)

    expect(actual).toBeTruthy()
  })

  it('should handle a numeric value', () => {
    const value = 42
    const maybe = Maybe.fromValue(value)
    const expected = 42

    const actual = maybe.getOrElse(0)

    expect(actual).toBe(expected)
  })

  it('should handle the zero value as valid', () => {
    const value = 0
    const maybe = Maybe.fromValue(value)
    const expected = 0

    const actual = maybe.getOrElse(1)

    expect(actual).toBe(expected)
  })

  it('should throw an error if the value is not valid', () => {
    const value = null

    expect(() => {
      Maybe.some(value)
    }).toThrowError()
  })

  it('should check if it has a value', () => {
    const value = 'hello'
    const maybe = Maybe.fromValue(value)

    const actual = maybe.has()

    expect(actual).toBeTruthy()
  })

  it('should check if it does not have a value', () => {
    const value = null
    const maybe = Maybe.fromValue<string>(value)

    const actual = maybe.has()

    expect(actual).toBeFalsy()
  })

  it('should get the value', () => {
    const value = 5
    const maybe = Maybe.fromValue(value)

    const actual = maybe.get()

    expect(actual).toBe(5)
  })

  it("should throw error if it doesn't have a value", () => {
    const value = null
    const maybe = Maybe.fromValue(value)

    expect(() => {
      maybe.get()
    }).toThrowError()
  })

  it('should handle a callback as a default value', () => {
    const mock = jest.fn()
    const maybe = Maybe.fromValue('')

    maybe.getOrExecute(mock)

    expect(mock).toHaveBeenCalled()
  })

  it('should handle a get or throw', () => {
    const value = null
    const maybe = Maybe.fromValue(value)

    expect(() => {
      maybe.getOrThrow(new Error())
    }).toThrowError()
  })

  it('should get the value in a get or throw', () => {
    const expected = true
    const maybe = Maybe.fromValue(true)

    const actual = maybe.getOrThrow(new Error())

    expect(actual).toBe(expected)
  })

  it('should handle none value', () => {
    const maybe = Maybe.none()
    const expected = 'test'

    const actual = maybe.getOrElse('test')

    expect(actual).toEqual(expected)
  })

  it('should be able to map existing values', () => {
    const value = { a: 'a' }
    const maybe = Maybe.some(value)
    const expected = 'a'

    const actual = maybe.map(e => e.a).getOrElse('b')

    expect(actual).toEqual(expected)
  })

  it('should be able to map non existing values', () => {
    type Type = { foo: Maybe<{ bar: string }> }
    const maybe = Maybe.some<Type>({ foo: Maybe.none() })

    const actual = maybe
      .getOrExecute(() => {
        throw new Error()
      })
      .foo.map(x => x.bar)

    expect(actual).toEqual(Maybe.none())
  })

  it('should be able to flat map existing values', () => {
    type Type = { foo: Maybe<{ bar: string }> }
    const maybe = Maybe.fromValue<Type>({ foo: Maybe.some({ bar: 'qux' }) })
    const expected = Maybe.some('qux')

    const actual = maybe.flatMap(x => x.foo).map(x => x.bar)

    expect(actual).toEqual(expected)
  })

  it('should be able to flat map non existing values', () => {
    type Type = { foo: Maybe<{ bar: string }> }
    const map = Maybe.none<Type>()
    const expected = Maybe.none()

    const actual = map.flatMap(x => x.foo)

    expect(actual).toEqual(expected)
  })
})

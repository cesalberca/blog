import { Logger } from '../Logger'

jest.mock('../Datetime')

describe('Logger', () => {
  let logger: Logger
  let mock: jest.Mock

  beforeEach(() => {
    mock = jest.fn()
    logger = new Logger({ warn: mock, info: mock, error: mock })
  })

  it('should log as info with the current date', () => {
    logger.log('foo')

    expect(mock).toHaveBeenCalledWith(expect.stringContaining('[2019-03-02T23:00:00.000Z]'))
  })

  it('should log as info with the given message', () => {
    logger.log('foo')

    expect(mock).toHaveBeenCalledWith(expect.stringContaining('foo'))
  })
})

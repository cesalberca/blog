import { LoggerCommandDecorator } from '../LoggerCommandDecorator'
import { Command } from '../Command'
import { Logger } from '../Logger'

jest.mock('../Datetime')

describe('LoggerCommandDecorator', () => {
  let mock: jest.Mock = jest.fn()
  let infoMock: jest.Mock

  class MockCommand implements Command<unknown, unknown> {
    constructor(private readonly foo: string) {}

    async execute(): Promise<void> {
      mock(this.foo)
      return
    }
  }

  let decoratedCommand: Command<unknown, void>

  beforeEach(() => {
    infoMock = jest.fn()
    mock.mockClear()
    decoratedCommand = new LoggerCommandDecorator(
      new MockCommand('foo'),
      new Logger({ info: infoMock, warn: jest.fn(), error: jest.fn() })
    )
  })

  it('should still call original execute method', async () => {
    expect.assertions(1)

    await decoratedCommand.execute()

    expect(mock).toHaveBeenCalled()
  })

  it('should log time of execution', async () => {
    expect.assertions(1)

    await decoratedCommand.execute()

    expect(infoMock).toHaveBeenCalledWith(expect.stringContaining('2019-03-02T23:00:00.000Z'))
  })

  it('should log name of command class', async () => {
    expect.assertions(1)

    await decoratedCommand.execute()

    expect(infoMock).toHaveBeenCalledWith(expect.stringContaining('MockCommand'))
  })

  it('should log properties of command', async () => {
    expect.assertions(1)

    await decoratedCommand.execute()

    expect(infoMock).toHaveBeenCalledWith(expect.stringContaining('foo'))
  })
})

import { UseCaseDecorator } from '../UseCaseDecorator'
import { Logger } from '../../../infraestructure/Logger'
import { Command } from '../../../infraestructure/Command'
import { LoggerCommandDecorator } from '../../../infraestructure/LoggerCommandDecorator'

jest.mock('../../../infraestructure/LoggerCommandDecorator')

describe('UseCaseDecorator', () => {
  it('should decorate a given use case', () => {
    const logger = Logger.create({ stdout: { warn: jest.fn(), info: jest.fn(), error: jest.fn() } })
    const useCase = new UseCaseDecorator(logger)
    const command: Command<void> = {
      async execute(): Promise<void> {}
    }

    useCase.decorate(command)

    expect(LoggerCommandDecorator).toHaveBeenCalled()
  })
})

import { UseCaseDecorator } from '../UseCaseDecorator'
import { Logger } from '../../../domain/Logger'
import { Command } from '../../../domain/Command'
import { LoggerCommandDecorator } from '../../../domain/LoggerCommandDecorator'

jest.mock('../../../infraestructure/LoggerCommandDecorator')

describe('UseCaseDecorator', () => {
  it('should decorate a given use case', () => {
    const logger = new Logger({ warn: jest.fn(), info: jest.fn(), error: jest.fn() })
    const useCase = new UseCaseDecorator(logger)
    const command: Command<void> = {
      async execute(): Promise<void> {}
    }

    useCase.decorate(command)

    expect(LoggerCommandDecorator).toHaveBeenCalled()
  })
})

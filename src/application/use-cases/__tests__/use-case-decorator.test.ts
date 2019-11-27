import { UseCaseDecorator } from '../use-case-decorator'
import { Logger } from '../../../domain/logger'
import { Command } from '../../../domain/command'
import { LoggerCommandDecorator } from '../../../domain/logger-command-decorator'

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

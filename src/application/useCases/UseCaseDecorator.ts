import { Command } from '../../infraestructure/Command'
import { LoggerCommandDecorator } from '../../infraestructure/LoggerCommandDecorator'
import { Logger } from '../../infraestructure/Logger'

export class UseCaseDecorator {
  private static readonly logger = Logger.create({
    // eslint-disable-next-line
    stdout: { error: console.error, info: console.log, warn: console.warn }
  })

  public static decorate<T>(command: Command<T>) {
    return new LoggerCommandDecorator<T>(command, UseCaseDecorator.logger)
  }
}

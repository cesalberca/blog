import { Command } from '../../infraestructure/Command'
import { LoggerCommandDecorator } from '../../infraestructure/LoggerCommandDecorator'
import { Logger } from '../../infraestructure/Logger'

export class UseCaseDecorator {
  public constructor(private readonly logger: Logger) {}

  public decorate<T>(command: Command<T>) {
    return new LoggerCommandDecorator<T>(command, this.logger)
  }

  public static create() {
    return new UseCaseDecorator(
      Logger.create({
        // eslint-disable-next-line
        stdout: { error: console.error, info: console.log, warn: console.warn }
      })
    )
  }
}

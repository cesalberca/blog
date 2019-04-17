import { Command } from './Command'
import { Logger } from './Logger'

export class LoggerCommandDecorator<T> implements Command<T> {
  public constructor(
    private readonly decoratedCommand: Command<T>,
    private readonly logger: Logger
  ) {}

  public execute(): Promise<T> {
    this.logger.log(
      (this.decoratedCommand as Object).constructor.name +
        ' - ' +
        Object.getOwnPropertyNames(this.decoratedCommand)
    )
    return this.decoratedCommand.execute()
  }
}

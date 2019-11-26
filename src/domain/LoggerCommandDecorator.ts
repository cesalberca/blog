import { Command } from './Command'
import { Logger } from './Logger'
import { Injectable } from '../injectable'

@Injectable()
export class LoggerCommandDecorator implements Command<unknown, unknown> {
  constructor(
    private readonly decoratedCommand: Command<unknown, unknown>,
    private readonly logger: Logger
  ) {}

  execute(param: unknown): Promise<unknown> {
    this.logger.log(
      (this.decoratedCommand as Object).constructor.name +
        ' - ' +
        Object.getOwnPropertyNames(this.decoratedCommand)
    )
    return this.decoratedCommand.execute(param)
  }
}

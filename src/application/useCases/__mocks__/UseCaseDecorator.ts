import { Command } from '../../../infraestructure/Command'

export class UseCaseDecorator {
  public static decorate<T>(command: Command<T>) {
    return command
  }
}

import { Datetime } from './Datetime'
import { Injectable } from '../Injectable'
import { Inject } from '../Inject'
import { STDOUT_TYPE } from '../types'
import { Message, Stdout } from './Stdout'

type Level = 'warning' | 'error' | 'info'

@Injectable()
export class Logger {
  constructor(@Inject(STDOUT_TYPE) private readonly stdout: Stdout) {}

  log(message: Message, _options: { level: Level } = { level: 'info' }) {
    this.stdout.info(`[${Datetime.fromNow()}] ${message}`)
  }
}

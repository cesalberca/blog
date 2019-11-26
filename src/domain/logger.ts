import { Datetime } from './datetime'
import { TYPES } from '../types'
import { Message, Stdout } from './stdout'
import { Injectable } from '../injectable'
import { Inject } from '../inject'

type Level = 'warning' | 'error' | 'info'

@Injectable()
export class Logger {
  constructor(@Inject(TYPES.STDOUT) private readonly stdout: Stdout) {}

  log(message: Message, _options: { level: Level } = { level: 'info' }) {
    this.stdout.info(`[${Datetime.fromNow()}] ${message}`)
  }
}

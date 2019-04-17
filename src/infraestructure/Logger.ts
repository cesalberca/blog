import { Datetime } from './Datetime'

type Message = string | number
type Level = 'warning' | 'error' | 'info'
type Log = (message: Message) => void
type Stdout = {
  error: Log
  info: Log
  warn: Log
}

export class Logger {
  private constructor(private readonly stdout: Stdout) {}

  public log(message: Message, options: { level: Level } = { level: 'info' }) {
    switch (options.level) {
      case 'info':
        this.stdout.info(`[${Datetime.fromNow()}] ${message}`)
        break
      case 'warning':
        this.stdout.warn(`[${Datetime.fromNow()}] ${message}`)
        break
      case 'error':
        this.stdout.error(`[${Datetime.fromNow()}] ${message}`)
        break
      default:
        this.stdout.info(`[${Datetime.fromNow()}] ${message}`)
        break
    }
  }

  public static create(options: { stdout: Stdout }) {
    return new Logger(options.stdout)
  }
}

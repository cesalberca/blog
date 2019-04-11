import { Command } from '../Command'
import { Unpromisify } from './Unpromisify'

export type CommandType<T extends Command<unknown>> = Unpromisify<ReturnType<T['execute']>>

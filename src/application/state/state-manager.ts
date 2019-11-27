import { Subject } from '../../domain/subject'
import { State } from './state'

export interface StateManager extends Subject {
  state: State
}

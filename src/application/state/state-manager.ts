import { Subject } from '../../domain/types/subject'
import { State } from './state'

export interface StateManager extends Subject {
  state: State
}

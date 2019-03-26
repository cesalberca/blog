import { Observer } from './Observer'

export interface Subject {
  register: (observer: Observer) => void
  notifyAll: () => void
}

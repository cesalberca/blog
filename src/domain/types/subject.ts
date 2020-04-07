import { Observer } from './observer.js'

export interface Subject {
  register: (observer: Observer) => void
  notifyAll: () => void
}

import { register } from 'register-service-worker'
import { Observer, Subject } from '../infraestructure'

export class ServiceWorkerRegisterer implements Subject {
  private observers: Observer[] = []

  public constructor(private readonly log: Function) {
    if (process.env.NODE_ENV === 'production') {
      register(`${process.env.BASE_URL}service-worker.js`, {
        ready: () => {
          this.log(
            `App is being served from cache by a service worker.
For more details, visit https://goo.gl/AFskqB`
          )
        },
        registered: () => {
          this.log('Service worker has been registered.')
        },
        cached: () => {
          this.log('Content has been cached for offline use.')
        },
        updatefound: () => {
          this.log('New content is downloading.')
        },
        updated: () => {
          this.notifyAll()
        },
        offline: () => {
          this.log('No internet connection found. App is running in offline mode.')
        },
        error: error => {
          this.log('Error during service worker registration:', error)
        }
      })
    }
  }

  public static create() {
    // eslint-disable-next-line
    return new ServiceWorkerRegisterer(window.console.log)
  }

  notifyAll() {
    this.observers.forEach(o => o.notify())
  }

  public register(observer: Observer) {
    this.observers.push(observer)
  }
}

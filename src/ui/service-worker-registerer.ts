import { register } from 'register-service-worker'
import { Injectable } from '../domain/types/injectable'
import { Inject } from '../domain/types/inject'
import { TYPES } from '../types'
import { Logger } from '../domain/logger'

@Injectable()
export class ServiceWorkerRegisterer {
  constructor(
    @Inject(TYPES.LOGGER) private readonly logger: Logger,
    @Inject(TYPES.WINDOW) private readonly window: Window
  ) {}

  register() {
    if (process.env.NODE_ENV === 'production') {
      register(`${process.env.BASE_URL}service-worker.js`, {
        ready: () => {
          this.logger.log(
            `App is being served from cache by a service worker.
For more details, visit https://goo.gl/AFskqB`
          )
        },
        registered: () => {
          this.logger.log('Service worker has been registered.')
        },
        cached: () => {
          this.logger.log('Content has been cached for offline use.')
        },
        updatefound: () => {
          this.logger.log('New content is downloading.')
        },
        updated: () => {
          this.window.location.reload()
        },
        offline: () => {
          this.logger.log('No internet connection found. App is running in offline mode.')
        },
        error: error => {
          this.logger.log('Error during service worker registration:' + error)
        }
      })
    }
  }
}

import 'reflect-metadata'
import XApp from './ui/x-app.vue'
import { Application } from './ui/application'
import { Container } from './container'
import { TYPES } from './types'

Container.instance()
  .get<Application>(TYPES.APPLICATION)
  .create(XApp)

import { Injectable } from './dependency-injection/injectable'
import { Inject } from './dependency-injection/inject'
import { TYPES } from '../types'
import type { Global } from './global'

@Injectable()
export class HtmlParserService {
  constructor(@Inject(TYPES.GLOBAL) private readonly global: Global) {}

  parseToPlainText(html: string): string {
    const document = new this.global.DOMParser().parseFromString(html, 'text/html')
    return document.body.textContent ?? ''
  }
}

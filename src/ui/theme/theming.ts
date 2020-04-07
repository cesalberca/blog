import { Theme } from './theme.js'
import { Inject } from '../../domain/types/inject.js'
import { TYPES } from '../../types.js'
import { StateManager } from '../../application/state/state-manager.js'
import { customElement, LitElement, css, html } from '/web_modules/lit-element.js'
import { classMap } from '/web_modules/lit-html/directives/class-map.js'

@customElement('app-theming')
export class Theming extends LitElement {
  @Inject(TYPES.STATE_MANAGER)
  readonly stateManager!: StateManager

  static get styles() {
    return css`
      body {
        background-color: var(--background-color);
      }

      .wrapper {
        height: 100%;
      }

      .dark,
      .light {
        color: var(--foreground-color);
        background-color: var(--background-color);
      }
    `
  }

  get theme(): string {
    switch (this.stateManager.state.theme) {
      case Theme.DARK:
        return 'dark'
      case Theme.LIGHT:
      default:
        return 'light'
    }
  }

  render() {
    return html`<div class="wrapper" class="${classMap({ [this.theme]: true })}">
      <slot></slot>
    </div>`
  }
}

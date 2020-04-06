import { Theme } from './theme'
import { Inject } from '../../domain/types/inject'
import { TYPES } from '../../types'
import { StateManager } from '../../application/state/state-manager'
import { customElement, LitElement, css, html } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map'

@customElement('app-theming')
export class XTheming extends LitElement {
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

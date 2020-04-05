import { Inject } from '../../domain/types/inject'
import { TYPES } from '../../types'
import { StateManager } from '../../application/state/state-manager'
import { css, customElement, html, LitElement } from 'lit-element'

@customElement('x-page')
export class XPage extends LitElement {
  @Inject(TYPES.WINDOW)
  window!: Window

  @Inject(TYPES.STATE_MANAGER)
  stateManager!: StateManager

  @Watch('stateManager.state.shouldReload')
  onShouldReloadChange() {
    if (this.stateManager.state.shouldReload) {
      this.window.location.reload(true)
    }
  }

  static get styles() {
    return css`
      .page {
        padding: var(--large-size) var(--medium-size) var(--medium-size);
        min-height: 100vh;
      }

      .wrapper {
        margin: 0 auto;
        max-width: var(--body-width);
      }
    `
  }

  render() {
    return html`<div>
      <div class="page">
        <div class="wrapper">
          <slot />
        </div>
      </div>
      <x-footer></x-footer>
    </div>`
  }
}

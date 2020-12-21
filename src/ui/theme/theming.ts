import { Theme } from '../../application/state/theme.js'
import { Inject } from '../../domain/types/inject.js'
import { TYPES } from '../../types.js'
import { Store } from '../../application/state/store.js'
import { css, customElement, html, LitElement, property } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map.js'
import { tap } from 'rxjs/operators'
import { Subscription } from 'rxjs'
import { general } from '../general.js'

const darkTheme = css`
  .dark {
    --foreground-color: var(--white-color);
    --background-color: var(--dark-blue-color);
    --link-color: var(--white-color);

    --link-hover-color: black;

    --code-background: var(--blue-dark-color);
    --code-foreground: var(--foreground-color);

    --bold-color: white;
  }
`

const lightTheme = css`
  .light {
    --foreground-color: var(--black-color);
    --background-color: var(--white-color);
    --title-color: var(--foreground-color);
    --code-background: var(--blue-dark-color);
    --code-foreground: var(--background-color);
  }
`

@customElement('app-theming')
export class Theming extends LitElement {
  @Inject(TYPES.STORE)
  readonly state!: Store

  @property({ type: String })
  currentTheme = 'light'

  private subscription!: Subscription

  static get styles() {
    return [
      general,
      css`
        body {
          background-color: var(--background-color);
        }

        .dark,
        .light {
          color: var(--foreground-color);
          background-color: var(--background-color);
        }
      `,
      lightTheme,
      darkTheme
    ]
  }

  connectedCallback(): void {
    super.connectedCallback()
    this.subscription = this.state
      .observable()
      .pipe(
        tap(state => {
          switch (state.theme) {
            case Theme.DARK:
              this.currentTheme = 'dark'
              break
            case Theme.LIGHT:
            default:
              this.currentTheme = 'light'
              break
          }
        })
      )
      .subscribe()
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    this.subscription.unsubscribe()
  }

  render() {
    return html`<div class="${classMap({ [this.currentTheme]: true, wrapper: true })}">
      <slot></slot>
    </div>`
  }
}

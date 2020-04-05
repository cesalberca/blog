import { Direction } from './direction'
import { Datetime } from '../../domain/datetime'
import { Translate } from './translate'
import { Inject } from '../../domain/types/inject'
import { TYPES } from '../../types'
import { css, customElement, LitElement, html } from 'lit-element'

@customElement('x-footer')
export class XFooter extends LitElement {
  direction = Direction.VERTICAL

  @Inject(TYPES.TRANSLATE)
  readonly translate!: Translate

  get coverageLiteral() {
    return this.translate('_coverage')
  }

  get coverage() {
    return process.env.VUE_APP_COVERAGE
  }

  get todaysYear() {
    return Datetime.fromNow().year
  }

  static get styles() {
    return css`
      .footer {
        --link-color: var(--white-color);
        padding: calc(var(--base) * 6) var(--medium-size);
        background-color: var(--blue-dark-color);
      }

      .wrapper {
        max-width: var(--body-width);
        margin: 0 auto;
      }

      .links {
        --primary-color: var(--white-color);
        --title-text: var(--body-text);
      }

      .info {
        color: var(--gray-color);
        display: flex;
        flex-direction: column;
      }

      .copy {
        --link-hover-color: var(--black-color);
      }

      .coverage {
        font-size: var(--small-text);
        display: flex;
        align-items: center;
      }

      .coverage-percentage {
        display: inline-block;
        width: 4px;
        height: 4px;
        background-color: var(--green-color);
        border-radius: 100%;
        margin-right: 4px;
        margin-left: 10px;
      }
    `
  }

  render() {
    return html` <footer class="footer">
      <div class="wrapper">
        <x-links :direction="direction" class="links" />
        <section class="info">
          <small class="copy"
            >© {{ todaysYear }} ‒ Made with
            <x-link to="https://www.typescriptlang.org/" external>TypeScript</x-link>,
            <x-link to="https://wikipedia.org/wiki/SOLID" external>SOLID</x-link> and
            <x-link
              to="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"
              external
              >Clean Architecture</x-link
            >.</small
          >
          <small class="coverage"
            >{{ coverageLiteral }}<span class="coverage-percentage"></span>{{ coverage }}%</small
          >
        </section>
      </div>
    </footer>`
  }
}

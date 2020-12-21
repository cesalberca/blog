import { Direction } from './direction.js'
import { Inject } from '../../domain/types/inject.js'
import { TYPES } from '../../types.js'
import { css, customElement, html, LitElement, property } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map.js'
import { general } from '../general.js'

@customElement('app-navbar')
export class Navbar extends LitElement {
  @Inject(TYPES.WINDOW)
  window!: Window

  @property({
    type: Boolean,
    hasChanged: (value: boolean, oldValue: boolean): boolean => {
      if (value === oldValue) {
        return false
      }

      window.document.body.classList.toggle('block')
      return true
    }
  })
  isActive = false

  static get styles() {
    return [
      general,
      css`
        .block {
          overflow: hidden;
        }

        .navbar {
          --link-color: var(--white-color);
          background-color: var(--navbar-background, var(--primary-color));
          position: var(--navbar-position, initial);
          width: 100%;
          z-index: 1;
          text-shadow: var(--navbar-text-shadow);
        }

        .wrapper {
          margin: 0 auto;
          padding: var(--medium-size);
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: var(--body-width);
        }

        .options {
          margin-left: auto;
        }

        .hamburger {
          display: none;
          margin: 0;
          padding: 0;
          cursor: pointer;
          transition-timing-function: linear;
          transition-duration: 0.15s;
          transition-property: opacity, filter;
          border: 0;
          background-color: transparent;
        }

        .is-active .hamburger-inner {
          transition-delay: 75ms;
          transform: rotate(135deg);
        }

        .is-active .hamburger-inner:before {
          transition-delay: 0s;
          opacity: 0;
        }

        .is-active .hamburger-inner:after {
          transition-delay: 75ms;
          transform: translate3d(0, -11px, 0) rotate(-270deg);
        }

        .hamburger-box {
          position: relative;
          display: inline-block;
          width: 40px;
          height: 24px;
        }

        .hamburger-inner {
          top: 50%;
          display: block;
          margin-top: -2px;
        }

        .hamburger-inner:after,
        .hamburger-inner:before {
          display: block;
          content: '';
        }

        .hamburger-inner:before {
          top: -10px;
        }

        .hamburger-inner:after {
          bottom: -10px;
        }

        .hamburger-inner,
        .hamburger-inner:after,
        .hamburger-inner:before {
          transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
          transition-duration: 0.22s;
          position: absolute;
          width: 40px;
          height: 4px;
          transition-property: transform;
          border-radius: 4px;
          background-color: #fff;
        }

        .mobile-navigation {
          display: none;
        }

        @media (max-width: 768px) {
          .navbar {
            display: flex;
            padding-bottom: var(--medium-size);
          }

          nav {
            margin-left: auto;
          }

          .hamburger {
            display: inline-block;
            position: absolute;
            z-index: 999;
            top: calc(var(--medium-size) + 4px);
            left: var(--medium-size);
          }

          .backdrop {
            display: flex;
            padding: var(--medium-size) var(--big-size);
            position: absolute;
            top: 0;
            left: 0;
            width: 60vw;
            height: 100vh;
            z-index: 2;
            padding-top: 80px;
            background-color: var(--primary-color);
            transform: translateX(-100%);
            transition: 0.25s ease transform;
          }

          .mobile-navigation {
            display: flex;
            width: 100%;
            margin-top: var(--medium-size);
          }

          .show-veil {
            width: 100vw;
            height: 100vh;
            background-color: hsla(0, 0%, 14%, 0.9);
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1;
          }

          .has-backdrop {
            transform: translateX(0);
          }

          .desktop-navigation {
            display: none;
          }
        }
      `
    ]
  }

  render() {
    return html`<header class="navbar">
      <nav class="mobile-navigation">
        <button
          type="button"
          aria-label="Menu"
          class="${classMap({ hamburger: true, 'is-active': this.isActive })}"
          @click="${() => (this.isActive = !this.isActive)}"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>

        <app-options class="options"></app-options>

        <div class="${classMap({ backdrop: true, 'has-backdrop': this.isActive })}">
          <app-links
            .direction="${Direction.VERTICAL}"
            class="mobile-links"
            @link-clicked="${() => {
              this.isActive = false
            }}"
          ></app-links>
        </div>
        <div
          class="${classMap({ veil: true, 'show-veil': this.isActive })}"
          @click="${() => (this.isActive = false)}"
        ></div>
      </nav>

      <nav class="desktop-navigation">
        <div class="wrapper">
          <app-links></app-links>
          <app-options></app-options>
        </div>
      </nav>
    </header>`
  }
}

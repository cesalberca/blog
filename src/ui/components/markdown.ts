import Prism from '/web_modules/prismjs.js'
import { Markdown as MarkdownObject } from '../../domain/markdown.js'
import { css, customElement, LitElement, property, html } from '/web_modules/lit-element.js'
import { unsafeHTML } from '/web_modules/lit-html/directives/unsafe-html.js'

@customElement('app-markdown')
export class Markdown extends LitElement {
  @property({ type: String })
  markdown!: string

  get html() {
    return MarkdownObject.fromValue(this.markdown).toHtml()
  }

  highlight() {
    Prism.highlightAll()
  }

  onBodyChange() {
    this.highlight()
  }

  static get styles() {
    return css`
      .markdown a {
        color: var(--link-color);
        text-decoration: none;
        transition: ease color 0.5s;
        transform-style: preserve-3d;
        position: relative;
      }

      .markdown a:after {
        --link-offset: 3px;
        content: '';
        transform: translateZ(-1px);
        width: calc(100% + var(--link-offset) * 2);
        height: 1px;
        position: absolute;
        background-color: var(--link-color);
        bottom: calc(var(--link-offset) * -1);
        transition: ease height 0.25s;
        left: calc(var(--link-offset) * -1);
        right: calc(100% + var(--link-offset));
        z-index: -1;
        display: inline-block;
      }

      .markdown a:hover:after {
        height: calc(100% + 2px);
      }

      .markdown a:hover {
        color: var(--link-hover-color);
      }

      .markdown code {
        color: var(--code-foreground);
      }

      .markdown blockquote {
        font-style: italic;
        position: relative;
        margin-left: 0;
        padding-left: 40px;
      }

      .markdown img {
        width: 100%;
      }

      .markdown blockquote:before {
        display: inline-block;
        content: '';
        position: absolute;
        width: 3px;
        left: 0;
        height: 90%;
        top: 5%;
        background-color: var(--primary-color);
      }
    `
  }

  render() {
    return html`<div class="markdown">${unsafeHTML(this.html)}</div>`
  }
}

import Prism from '/web_modules/prismjs.js'
import { Markdown as MarkdownObject } from '../../domain/markdown.js'
import { css, customElement, LitElement, property, html } from '/web_modules/lit-element.js'

@customElement('app-markdown')
export class Markdown extends LitElement {
  @property({ type: Object })
  body!: MarkdownObject

  get html() {
    return this.body.toHtml()
  }

  highlight() {
    Prism.highlightAll()
  }

  onBodyChange() {
    this.highlight()
  }

  static get styles() {
    return css`
      .markdown ::v-deep a {
        color: var(--link-color);
        text-decoration: none;
        transition: ease color 0.5s;
        transform-style: preserve-3d;
        position: relative;
      }

      .markdown ::v-deep a:after {
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

      .markdown ::v-deep a:hover:after {
        height: calc(100% + 2px);
      }

      .markdown ::v-deep a:hover {
        color: var(--link-hover-color);
      }

      .markdown ::v-deep code {
        color: var(--code-foreground);
      }

      .markdown ::v-deep blockquote {
        font-style: italic;
        position: relative;
        margin-left: 0;
        padding-left: 40px;
      }

      .markdown ::v-deep img {
        width: 100%;
      }

      .markdown ::v-deep blockquote:before {
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
    return html`<div class="markdown" v-html="html"></div>`
  }
}

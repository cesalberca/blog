import Prism from '/web_modules/prismjs.js'
import { Markdown as MarkdownObject } from '../../domain/markdown.js'
import { css, customElement, html, LitElement, property } from '/web_modules/lit-element.js'
import { unsafeHTML } from '/web_modules/lit-html/directives/unsafe-html.js'
import { general } from '../styles/general.js'

@customElement('app-markdown')
export class Markdown extends LitElement {
  @property({ type: String })
  markdown!: string

  get html() {
    return MarkdownObject.fromValue(this.markdown).toHtml()
  }

  updated() {
    Prism.highlightAllUnder(this.shadowRoot!)
  }

  static get styles() {
    return [
      general,
      css`
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

        /**
       * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML
       * Based on https://github.com/chriskempson/tomorrow-theme
       * @author Rose Pritchard
       */
        code[class*='language-'],
        pre[class*='language-'] {
          color: var(--code-foreground);
          background: none;
          font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          font-size: 1em;
          text-align: left;
          white-space: pre;
          word-spacing: normal;
          word-break: normal;
          word-wrap: normal;
          line-height: 1.5;

          tab-size: 4;

          hyphens: none;
          border-radius: 5px;
        }

        /* Code blocks */
        pre[class*='language-'] {
          overflow: auto;
          width: calc(var(--body-width) * 1.2);
          margin: 0.5em 0 0.5em calc(var(--body-width) * -0.2 / 2);
          overflow-x: scroll;
          padding: var(--medium-size);
        }

        @media (max-width: 1024px) {
          pre[class*='language-'] {
            margin: 0.5em 0;
            width: 100%;
          }
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: var(--code-background);
        }

        /* Inline code */
        :not(pre) > code {
          border-radius: 0.3em;
          white-space: normal;
          background-color: var(--code-background);
          padding: var(--base);
        }

        .token.comment,
        .token.block-comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: var(--code-commment-color);
        }

        .token.punctuation {
          color: var(--code-punctuation-color);
        }

        .token.tag,
        .token.attr-name,
        .token.namespace,
        .token.deleted {
          color: var(--code-tag-color);
        }

        .token.function-name {
          color: var(--code-function-color);
        }

        .token.boolean,
        .token.number,
        .token.function {
          color: var(--code-token-color);
        }

        .token.property,
        .token.class-name,
        .token.constant,
        .token.symbol {
          color: var(--code-property-color);
        }

        .token.selector,
        .token.important,
        .token.atrule,
        .token.keyword,
        .token.builtin {
          color: var(--code-selector-color);
        }

        .token.string,
        .token.char,
        .token.attr-value,
        .token.regex,
        .token.variable {
          color: var(--code-string-color);
        }

        .token.operator,
        .token.entity,
        .token.url {
          color: var(--code-operator-color);
        }

        .token.important,
        .token.bold {
          font-weight: bold;
        }
        .token.italic {
          font-style: italic;
        }

        .token.entity {
          cursor: help;
        }

        .token.inserted {
          color: var(--code-inserted-color);
        }
      `
    ]
  }

  render() {
    return html`<div class="markdown">${unsafeHTML(this.html)}</div>`
  }
}

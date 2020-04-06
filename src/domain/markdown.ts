import marked from '/web_modules/marked.js'

export class Markdown {
  private readonly renderer = new marked.Renderer()

  constructor(private readonly _value: string) {
    this.configureRenderer()
    marked.setOptions({ renderer: this.renderer })
  }

  static fromValue(value: string) {
    return new Markdown(value)
  }

  get value(): string {
    return this._value
  }

  toHtml(): string {
    return marked(this._value)
  }

  private configureRenderer() {
    this.renderer.link = (href: string, title: string, text: string) => {
      const external = /^https?:\/\/.+$/.test(href)
      const newWindow = external || title === 'newWindow'
      let out = `<a href="${href}"`

      if (newWindow) {
        out += ` target="_blank"`
      }

      if (title && title !== 'newWindow') {
        out += ` title="${title}"`
      }

      return out + `>${text}</a>`
    }
  }
}

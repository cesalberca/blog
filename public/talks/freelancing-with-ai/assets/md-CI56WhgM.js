import { _ as m } from './slidev/VClick-BEJhwFIm.js'
import { _ as p } from './ScrambleText-CbrnPwX3.js'
import { o as u, c as _, k as e, e as o, l as r, q as d, s as c, B as l } from './modules/vue-BITYyB3i.js'
import { _ as f } from './slidev/image-right.vue_vue_type_script_setup_true_lang-yLOZd28R.js'
import { u as x, f as $ } from './slidev/context-B7EsKp3R.js'
import './index-BivI_MQ5.js'
import './modules/shiki-85yLJs1k.js'
import './slidev/layoutHelper-DV4UY9LA.js'
const y = {
  __name: 'slides.md__slidev_11',
  setup(k) {
    const { $slidev: v, $nav: C, $clicksContext: n, $clicks: B, $page: P, $renderContext: g, $frontmatter: a } = x()
    return (
      n.setup(),
      (T, t) => {
        const i = p,
          s = m
        return (
          u(),
          _(
            f,
            d(c(l($)(l(a), 10))),
            {
              default: e(() => [
                o('h1', null, [r(i, { text: 'ChatGPT' })]),
                o('ul', null, [
                  r(s, null, {
                    default: e(() => t[0] || (t[0] = [o('li', null, 'Curva de aprendizaje reducida', -1)])),
                    _: 1,
                  }),
                  r(s, null, { default: e(() => t[1] || (t[1] = [o('li', null, 'Writers block', -1)])), _: 1 }),
                  r(s, null, { default: e(() => t[2] || (t[2] = [o('li', null, 'Adaptar contenido', -1)])), _: 1 }),
                ]),
                t[3] || (t[3] = o('div', { class: 'text-sm opacity-70' }, 'chat.openai.com', -1)),
              ]),
              _: 1,
            },
            16,
          )
        )
      }
    )
  },
}
export { y as default }

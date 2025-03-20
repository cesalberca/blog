import { _ as m } from './slidev/VClick-BEJhwFIm.js'
import { _ as p } from './ScrambleText-CbrnPwX3.js'
import { o as u, c as _, k as e, e as o, l as s, q as f, s as c, B as n } from './modules/vue-BITYyB3i.js'
import { _ as d } from './slidev/image-right.vue_vue_type_script_setup_true_lang-yLOZd28R.js'
import { u as x, f as $ } from './slidev/context-B7EsKp3R.js'
import './index-BivI_MQ5.js'
import './modules/shiki-85yLJs1k.js'
import './slidev/layoutHelper-DV4UY9LA.js'
const Y = {
  __name: 'slides.md__slidev_12',
  setup(v) {
    const { $slidev: k, $nav: C, $clicksContext: r, $clicks: P, $page: T, $renderContext: g, $frontmatter: a } = x()
    return (
      r.setup(),
      (B, t) => {
        const i = p,
          l = m
        return (
          u(),
          _(
            d,
            f(c(n($)(n(a), 11))),
            {
              default: e(() => [
                o('h1', null, [s(i, { text: 'ChatGPT Custom GPTs' })]),
                o('ul', null, [
                  s(l, null, {
                    default: e(() => t[0] || (t[0] = [o('li', null, "Don't Repeat Yourself (DRY)", -1)])),
                    _: 1,
                  }),
                  s(l, null, { default: e(() => t[1] || (t[1] = [o('li', null, 'Refinar prompt', -1)])), _: 1 }),
                  s(l, null, { default: e(() => t[2] || (t[2] = [o('li', null, 'Tono y voz', -1)])), _: 1 }),
                ]),
                t[3] || (t[3] = o('div', { class: 'text-sm opacity-70' }, 'chat.openai.com/gpts', -1)),
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
export { Y as default }

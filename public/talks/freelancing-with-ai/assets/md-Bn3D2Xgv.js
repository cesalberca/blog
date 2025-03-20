import { _ as f } from './ScrambleText-CbrnPwX3.js'
import {
  o as n,
  b as x,
  e as i,
  f as $,
  r as v,
  c as k,
  k as o,
  aa as t,
  l as r,
  q as C,
  s as B,
  B as a,
} from './modules/vue-BITYyB3i.js'
import { u as l, f as q } from './slidev/context-B7EsKp3R.js'
import './index-BivI_MQ5.js'
import './modules/shiki-85yLJs1k.js'
const N = { class: 'slidev-layout quote' },
  P = { class: 'my-auto' },
  S = {
    __name: 'quote',
    setup(m) {
      return l(), (s, _) => (n(), x('div', N, [i('div', P, [$(s.$slots, 'default')])]))
    },
  },
  T = { class: 'text-[120px]' },
  R = {
    __name: 'slides.md__slidev_9',
    setup(m) {
      const { $slidev: s, $nav: _, $clicksContext: p, $clicks: V, $page: b, $renderContext: g, $frontmatter: c } = l()
      return (
        p.setup(),
        (y, e) => {
          const d = v('strike'),
            u = f
          return (
            n(),
            k(
              S,
              C(B(a(q)(a(c), 8))),
              {
                default: o(() => [
                  i('h1', T, [
                    e[1] || (e[1] = t('¿Cómo uso la IA para ser más ')),
                    r(d, null, { default: o(() => e[0] || (e[0] = [t('eficiente')])), _: 1 }),
                    e[2] || (e[2] = t()),
                    r(u, { text: 'efectivo' }),
                    e[3] || (e[3] = t('?')),
                  ]),
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
export { R as default }

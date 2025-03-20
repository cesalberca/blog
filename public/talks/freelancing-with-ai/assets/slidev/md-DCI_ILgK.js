import { _ as v } from './VClick-BEJhwFIm.js'
import {
  d as g,
  o as f,
  b as $,
  e as s,
  f as d,
  i,
  c as C,
  k as t,
  l as o,
  q as k,
  s as _,
  B as p,
} from '../modules/vue-BITYyB3i.js'
import { u as b, f as x } from './context-B7EsKp3R.js'
import '../index-BivI_MQ5.js'
import '../modules/shiki-85yLJs1k.js'
const y = g({
    __name: 'two-cols',
    props: { class: { type: String }, layoutClass: { type: String } },
    setup(u) {
      const r = u
      return (e, a) => (
        f(),
        $(
          'div',
          { class: i(['slidev-layout two-columns w-full h-full grid grid-cols-2', r.layoutClass]) },
          [
            s('div', { class: i(['col-left', r.class]) }, [d(e.$slots, 'default')], 2),
            s('div', { class: i(['col-right', r.class]) }, [d(e.$slots, 'right')], 2),
          ],
          2,
        )
      )
    },
  }),
  N = {
    __name: 'slides.md__slidev_10',
    setup(u) {
      const { $slidev: r, $nav: e, $clicksContext: a, $clicks: B, $page: P, $renderContext: j, $frontmatter: m } = b()
      return (
        a.setup(),
        (w, l) => {
          const n = v
          return (
            f(),
            C(
              y,
              k(_(p(x)(p(m), 9))),
              {
                right: t(M => [
                  l[6] || (l[6] = s('h1', { class: 'invisible' }, 'invisible', -1)),
                  l[7] || (l[7] = s('h2', null, 'Desventajas', -1)),
                  l[8] || (l[8] = s('br', null, null, -1)),
                  s('ul', null, [
                    o(n, null, { default: t(() => l[3] || (l[3] = [s('li', null, '¿Ahorro de tiempo?', -1)])), _: 1 }),
                    o(n, null, { default: t(() => l[4] || (l[4] = [s('li', null, '¿Mejor calidad?', -1)])), _: 1 }),
                    o(n, null, { default: t(() => l[5] || (l[5] = [s('li', null, '¿Más eficiencia?', -1)])), _: 1 }),
                  ]),
                ]),
                default: t(() => [
                  l[9] || (l[9] = s('h1', null, '¿Por qué usar IA?', -1)),
                  l[10] || (l[10] = s('h2', null, 'Ventajas', -1)),
                  l[11] || (l[11] = s('br', null, null, -1)),
                  s('ul', null, [
                    o(n, null, { default: t(() => l[0] || (l[0] = [s('li', null, 'Ahorro de tiempo', -1)])), _: 1 }),
                    o(n, null, { default: t(() => l[1] || (l[1] = [s('li', null, 'Mejor calidad', -1)])), _: 1 }),
                    o(n, null, { default: t(() => l[2] || (l[2] = [s('li', null, 'Más eficiencia', -1)])), _: 1 }),
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
export { N as default }

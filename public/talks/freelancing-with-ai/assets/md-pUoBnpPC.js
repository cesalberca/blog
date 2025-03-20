import { o as r, b as m, e, f as p, c as _, k as d, q as u, s as f, B as o } from './modules/vue-BITYyB3i.js'
import { u as a, f as $ } from './slidev/context-B7EsKp3R.js'
import './index-BivI_MQ5.js'
import './modules/shiki-85yLJs1k.js'
const k = { class: 'slidev-layout statement' },
  v = { class: 'my-auto' },
  x = {
    __name: 'statement',
    setup(n) {
      return a(), (t, l) => (r(), m('div', k, [e('div', v, [p(t.$slots, 'default')])]))
    },
  },
  j = {
    __name: 'slides.md__slidev_7',
    setup(n) {
      const { $slidev: t, $nav: l, $clicksContext: c, $clicks: B, $page: C, $renderContext: P, $frontmatter: i } = a()
      return (
        c.setup(),
        (h, s) => (
          r(),
          _(
            x,
            u(f(o($)(o(i), 6))),
            {
              default: d(
                () =>
                  s[0] ||
                  (s[0] = [
                    e('p', { class: 'font-mono' }, '"Si no puedes medirlo, no puedes mejorarlo."', -1),
                    e('p', null, '- Peter Drucker', -1),
                  ]),
              ),
              _: 1,
            },
            16,
          )
        )
      )
    },
  }
export { j as default }

import { g as T, h as U, i as E, j as D } from '../modules/unplugin-icons-4dqQQYnv.js'
import {
  d as H,
  t as y,
  U as L,
  z as u,
  E as V,
  o as _,
  b as j,
  e as o,
  h as C,
  B as l,
  l as s,
  k as p,
  c as z,
  x as b,
  F as I,
} from '../modules/vue-BITYyB3i.js'
import { u as M, a as P, d as t, e as R, s as q, f as A } from '../index-BivI_MQ5.js'
import { _ as G, C as J } from './NoteDisplay.vue_vue_type_style_index_0_lang-BflgwZJ8.js'
import { _ as d } from './IconButton.vue_vue_type_script_setup_true_lang-CDGaqduH.js'
import '../modules/shiki-85yLJs1k.js'
const K = { class: 'h-full pt-2 flex flex-col' },
  O = { class: 'flex-none border-t border-main', px3: '', py2: '' },
  Q = { class: 'flex-none border-t border-main' },
  W = { class: 'flex gap-1 items-center px-6 py-3' },
  X = { class: 'p2 text-center' },
  ne = H({
    __name: 'notes',
    setup(Y) {
      M({ title: `Notes - ${q}` })
      const { slides: w, total: f } = P(),
        { isFullscreen: m, toggle: S } = A,
        v = y(),
        n = L('slidev-notes-font-size', 18),
        a = u(() => {
          var e
          return ((e = t.lastUpdate) == null ? void 0 : e.type) === 'viewer' ? t.viewerPage : t.page
        }),
        x = u(() => w.value.find(e => e.no === a.value))
      V(a, () => {
        var e
        ;(e = v.value) == null || e.scrollTo({ left: 0, top: 0, behavior: 'smooth' }),
          window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
      })
      function $() {
        n.value = n.value + 1
      }
      function B() {
        n.value = n.value - 1
      }
      const k = u(() => {
        var i, r
        const e = ((i = t.lastUpdate) == null ? void 0 : i.type) === 'viewer' ? t.viewerClicks : t.clicks,
          c = ((r = t.lastUpdate) == null ? void 0 : r.type) === 'viewer' ? t.viewerClicksTotal : t.clicksTotal
        return R(y(e), void 0, c)
      })
      return (e, c) => {
        var h, g
        const i = E,
          r = D,
          F = T,
          N = U
        return (
          _(),
          j(
            I,
            null,
            [
              o(
                'div',
                {
                  class: 'fixed top-0 left-0 h-3px bg-primary transition-all duration-500',
                  style: C({ width: `${((a.value - 1) / (l(f) - 1)) * 100 + 1}%` }),
                },
                null,
                4,
              ),
              o('div', K, [
                o(
                  'div',
                  {
                    ref_key: 'scroller',
                    ref: v,
                    class: 'px-5 flex-auto h-full overflow-auto',
                    style: C({ fontSize: `${l(n)}px` }),
                  },
                  [
                    s(
                      G,
                      {
                        note: (h = x.value) == null ? void 0 : h.meta.slide.note,
                        'note-html': (g = x.value) == null ? void 0 : g.meta.slide.noteHTML,
                        placeholder: `No notes for Slide ${a.value}.`,
                        'clicks-context': k.value,
                        'auto-scroll': !0,
                      },
                      null,
                      8,
                      ['note', 'note-html', 'placeholder', 'clicks-context'],
                    ),
                  ],
                  4,
                ),
                o('div', O, [s(J, { 'clicks-context': k.value, readonly: '' }, null, 8, ['clicks-context'])]),
                o('div', Q, [
                  o('div', W, [
                    s(
                      d,
                      { title: l(m) ? 'Close fullscreen' : 'Enter fullscreen', onClick: l(S) },
                      { default: p(() => [l(m) ? (_(), z(i, { key: 0 })) : (_(), z(r, { key: 1 }))]), _: 1 },
                      8,
                      ['title', 'onClick'],
                    ),
                    s(d, { title: 'Increase font size', onClick: $ }, { default: p(() => [s(F)]), _: 1 }),
                    s(d, { title: 'Decrease font size', onClick: B }, { default: p(() => [s(N)]), _: 1 }),
                    c[0] || (c[0] = o('div', { class: 'flex-auto' }, null, -1)),
                    o('div', X, b(a.value) + ' / ' + b(l(f)), 1),
                  ]),
                ]),
              ]),
            ],
            64,
          )
        )
      }
    },
  })
export { ne as default }

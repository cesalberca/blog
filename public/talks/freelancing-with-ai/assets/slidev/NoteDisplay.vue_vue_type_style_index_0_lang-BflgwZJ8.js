import { m as T } from '../modules/unplugin-icons-4dqQQYnv.js'
import {
  d as N,
  z as h,
  o as v,
  b as f,
  e as u,
  l as z,
  B as I,
  F as D,
  x as _,
  ag as F,
  ae as P,
  af as V,
  i as k,
  h as E,
  t as A,
  E as K,
  n as R,
  K as q,
  D as j,
} from '../modules/vue-BITYyB3i.js'
import { q as U, r as X, C as H, _ as G } from '../index-BivI_MQ5.js'
const J = ['title'],
  O = { class: 'flex gap-0.2 items-center min-w-16 font-mono mr1' },
  Q = { 'text-primary': '' },
  W = { op50: '', 'text-sm': '' },
  Y = { key: 1, op50: '', 'flex-auto': '', pl1: '' },
  Z = { relative: '', 'flex-auto': '', h5: '', 'font-mono': '', flex: '~' },
  ee = ['min', 'max'],
  te = N({
    __name: 'ClicksSlider',
    props: { clicksContext: {}, readonly: { type: Boolean }, active: { type: Boolean, default: !0 } },
    setup(L) {
      const p = L,
        t = h(() => p.clicksContext.total),
        g = h(() => U(0, p.clicksContext.clicksStart, t.value)),
        m = h(() => t.value - g.value + 1),
        n = h({
          get() {
            return p.clicksContext.current > t.value ? -1 : p.clicksContext.current
          },
          set(s) {
            p.clicksContext.current = s
          },
        }),
        b = h(() => X(g.value, t.value + 1))
      function x() {
        p.readonly || ((n.value < 0 || n.value > t.value) && (n.value = 0))
      }
      return (s, a) => {
        const d = T
        return (
          v(),
          f(
            'div',
            {
              class: k(['flex gap-1 items-center select-none', m.value && p.clicksContext.isMounted ? '' : 'op50']),
              title: `Clicks in this slide: ${m.value}`,
            },
            [
              u('div', O, [
                z(d, { 'text-sm': '', op50: '' }),
                n.value >= 0 && n.value !== I(H) && s.active
                  ? (v(),
                    f(
                      D,
                      { key: 0 },
                      [
                        a[2] || (a[2] = u('div', { 'flex-auto': '' }, null, -1)),
                        u('span', Q, _(n.value), 1),
                        a[3] || (a[3] = u('span', { op25: '', 'text-sm': '' }, '/', -1)),
                        u('span', W, _(t.value), 1),
                      ],
                      64,
                    ))
                  : (v(), f('div', Y, _(t.value), 1)),
              ]),
              u('div', Z, [
                (v(!0),
                f(
                  D,
                  null,
                  F(
                    b.value,
                    r => (
                      v(),
                      f(
                        'div',
                        {
                          key: r,
                          border: 'y main',
                          'of-hidden': '',
                          relative: '',
                          class: k([r === 0 ? 'rounded-l border-l' : '', r === t.value ? 'rounded-r border-r' : '']),
                          style: E({ width: m.value > 0 ? `${(1 / m.value) * 100}%` : '100%' }),
                        },
                        [
                          u(
                            'div',
                            {
                              absolute: '',
                              'inset-0': '',
                              class: k(r <= n.value && s.active ? 'bg-primary op15' : ''),
                            },
                            null,
                            2,
                          ),
                          u(
                            'div',
                            {
                              class: k([
                                +r == +n.value && s.active
                                  ? 'text-primary font-bold op100 border-primary'
                                  : 'op30 border-main',
                                r === 0 ? 'rounded-l' : '',
                                r === t.value ? 'rounded-r' : 'border-r-2',
                              ]),
                              'w-full': '',
                              'h-full': '',
                              'text-xs': '',
                              flex: '',
                              'items-center': '',
                              'justify-center': '',
                              'z-1': '',
                            },
                            _(r),
                            3,
                          ),
                        ],
                        6,
                      )
                    ),
                  ),
                  128,
                )),
                P(
                  u(
                    'input',
                    {
                      'onUpdate:modelValue': a[0] || (a[0] = r => (n.value = r)),
                      class: k(['range', s.readonly ? 'pointer-events-none' : '']),
                      type: 'range',
                      min: g.value,
                      max: t.value,
                      step: 1,
                      absolute: '',
                      'inset-0': '',
                      'z-10': '',
                      op0: '',
                      style: E({ '--thumb-width': `${(1 / (m.value + 1)) * 100}%` }),
                      onMousedown: x,
                      onFocus:
                        a[1] ||
                        (a[1] = r => {
                          var C
                          return (C = r.currentTarget) == null ? void 0 : C.blur()
                        }),
                    },
                    null,
                    46,
                    ee,
                  ),
                  [[V, n.value]],
                ),
              ]),
            ],
            10,
            J,
          )
        )
      }
    },
  }),
  ie = G(te, [['__scopeId', 'data-v-ef0c5640']]),
  oe = ['innerHTML'],
  se = ['textContent'],
  le = ['textContent'],
  S = 'slidev-note-fade',
  y = 'slidev-note-click-mark',
  ce = N({
    __name: 'NoteDisplay',
    props: {
      class: {},
      noteHtml: {},
      note: {},
      highlight: { type: Boolean, default: !0 },
      placeholder: {},
      clicksContext: {},
      autoScroll: { type: Boolean },
    },
    emits: ['markerDblclick', 'markerClick'],
    setup(L, { emit: p }) {
      const t = L,
        g = p,
        m = h(() => {
          var s
          return t.clicksContext != null && ((s = t.noteHtml) == null ? void 0 : s.includes('slidev-note-click-mark'))
        }),
        n = A(null)
      function b() {
        var $, B
        if (!n.value || !m.value) return
        const s = Array.from(n.value.querySelectorAll(`.${y}`)),
          a = new Map(),
          d = new Map()
        let r = 0
        for (const i of s) {
          const l = Number(i.dataset.clicks)
          a.set(i, l)
          let o = i,
            e = i.parentElement
          for (; e && o !== n.value; )
            d.has(e) || d.set(e, [[null, r]]), d.get(e).push([o, l]), (o = e), (e = e.parentElement)
          r = l
        }
        const C = new Map()
        for (const [i, l] of d) {
          let o = !1,
            e = 0
          for (const c of Array.from(i.childNodes)) {
            let w = !1
            for (; c === (($ = l[e + 1]) == null ? void 0 : $[0]); ) (w = !0), e++
            if (w) continue
            let M = c
            if (c.nodeType === 3) {
              if (!((B = c.textContent) != null && B.trim())) continue
              ;(M = document.createElement('span')), (M.textContent = c.textContent), i.insertBefore(M, c), c.remove()
            }
            o || (o = e === 0), C.set(M, l[e][1])
          }
          o || (l[0][1] = -1)
        }
        return i => {
          const l = t.highlight
          for (const [o, e] of d) o.classList.toggle(S, l && !e.some(([c, w]) => w === i))
          for (const [o, e] of C) o.classList.toggle(S, l && e !== i)
          for (const [o, e] of a)
            o.classList.remove(S),
              o.classList.toggle(`${y}-past`, l && e < i),
              o.classList.toggle(`${y}-active`, l && e === i),
              o.classList.toggle(`${y}-next`, l && e === i + 1),
              o.classList.toggle(`${y}-future`, l && e > i + 1),
              (o.ondblclick = l
                ? c => {
                    g('markerDblclick', c, e),
                      !c.defaultPrevented &&
                        ((t.clicksContext.current = e), c.stopPropagation(), c.stopImmediatePropagation())
                  }
                : null),
              (o.onclick = l
                ? c => {
                    g('markerClick', c, e)
                  }
                : null),
              l && t.autoScroll && e === i && o.scrollIntoView({ block: 'center', behavior: 'smooth' })
        }
      }
      const x = A()
      return (
        K(
          () => [t.noteHtml, t.highlight],
          () => {
            R(() => {
              x.value = b()
            })
          },
          { immediate: !0 },
        ),
        q(() => {
          b()
        }),
        j(() => {
          var a, d
          const s = ((a = t.clicksContext) == null ? void 0 : a.current) ?? H
          ;(d = x.value) == null || d.call(x, s)
        }),
        (s, a) =>
          s.noteHtml
            ? (v(),
              f(
                'div',
                {
                  key: 0,
                  ref_key: 'noteDisplay',
                  ref: n,
                  class: k([
                    'prose overflow-auto outline-none slidev-note',
                    [t.class, m.value ? 'slidev-note-with-clicks' : ''],
                  ]),
                  innerHTML: s.noteHtml,
                },
                null,
                10,
                oe,
              ))
            : s.note
              ? (v(),
                f(
                  'div',
                  { key: 1, class: k(['prose overflow-auto outline-none slidev-note', t.class]) },
                  [u('p', { textContent: _(s.note) }, null, 8, se)],
                  2,
                ))
              : (v(),
                f(
                  'div',
                  {
                    key: 2,
                    class: k(['prose overflow-auto outline-none opacity-50 italic select-none slidev-note', t.class]),
                  },
                  [u('p', { textContent: _(t.placeholder || 'No notes.') }, null, 8, le)],
                  2,
                ))
      )
    },
  })
export { ie as C, ce as _ }

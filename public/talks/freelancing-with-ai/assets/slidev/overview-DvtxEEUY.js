import { d as te, e as ne, _ as oe, f as le } from '../modules/unplugin-icons-4dqQQYnv.js'
import {
  d as Q,
  ab as ie,
  ac as ae,
  t as B,
  ad as se,
  E as j,
  D as ce,
  a4 as re,
  n as Y,
  B as c,
  o as i,
  c as k,
  i as S,
  h as W,
  ae as ue,
  af as de,
  b as x,
  j as me,
  N as pe,
  z as L,
  O as fe,
  K as ve,
  e as s,
  F as q,
  ag as X,
  k as N,
  x as w,
  g as I,
  l as C,
} from '../modules/vue-BITYyB3i.js'
import {
  u as he,
  a as ge,
  s as ke,
  c as _e,
  C as G,
  i as be,
  b as V,
  t as xe,
  g as J,
  p as ye,
} from '../index-BivI_MQ5.js'
import { _ as we, C as Ce } from './NoteDisplay.vue_vue_type_style_index_0_lang-BflgwZJ8.js'
import { u as De, S as $e, _ as Fe, a as Se } from './SlideWrapper-C6iRWNTm.js'
import { _ as K } from './IconButton.vue_vue_type_script_setup_true_lang-CDGaqduH.js'
import '../modules/shiki-85yLJs1k.js'
const Ee = ['placeholder'],
  Me = Q({
    __name: 'NoteEditable',
    props: {
      no: { type: Number, required: !0 },
      class: { default: '' },
      editing: { default: !1 },
      style: { default: () => ({}) },
      placeholder: { default: 'No notes for this slide' },
      clicksContext: { type: Object },
      highlight: { default: !0 },
      autoHeight: { default: !1 },
    },
    emits: ['update:editing', 'markerDblclick', 'markerClick'],
    setup(D, { emit: R }) {
      const l = D,
        y = R,
        r = ie(l, 'editing', y, { passive: !0 }),
        { info: h, update: $ } = De(ae(l, 'no')),
        p = B('')
      let E
      const { ignoreUpdates: _ } = se(p, a => {
        if (!r.value) return
        const m = l.no
        ;(clearTimeout(E),
          (E = setTimeout(() => {
            $({ note: a }, m)
          }, 500)))
      })
      j(
        () => {
          var a
          return (a = h.value) == null ? void 0 : a.note
        },
        (a = '') => {
          r.value ||
            (clearTimeout(E),
            _(() => {
              p.value = a
            }))
        },
        { immediate: !0, flush: 'sync' },
      )
      const d = B(),
        b = B()
      ;(ce(() => {
        var a
        r.value && ((a = d.value) == null || a.focus())
      }),
        re(d, () => {
          r.value = !1
        }))
      function T() {
        !l.autoHeight ||
          !d.value ||
          !r.value ||
          (d.value.scrollHeight > d.value.clientHeight && (d.value.style.height = `${d.value.scrollHeight}px`))
      }
      function z(a) {
        r.value && a.metaKey && a.key === 's' && (a.preventDefault(), $({ note: p.value }, l.no))
      }
      return (
        j(
          [p, r],
          () => {
            Y(() => {
              T()
            })
          },
          { flush: 'post', immediate: !0 },
        ),
        (a, m) => {
          var M
          return c(r)
            ? ue(
                (i(),
                x(
                  'textarea',
                  {
                    key: 1,
                    ref_key: 'inputEl',
                    ref: d,
                    'onUpdate:modelValue': m[2] || (m[2] = g => (p.value = g)),
                    class: S([
                      'prose resize-none overflow-auto outline-none bg-transparent block border-primary border-2',
                      l.class,
                    ]),
                    style: W([{ 'line-height': '1.75' }, [l.style, b.value != null ? { height: `${b.value}px` } : {}]]),
                    placeholder: D.placeholder,
                    onKeydown: [m[3] || (m[3] = me(g => (r.value = !1), ['esc'])), z],
                  },
                  null,
                  46,
                  Ee,
                )),
                [[de, p.value]],
              )
            : (i(),
              k(
                we,
                {
                  key: 0,
                  class: S(['border-transparent border-2', [l.class, p.value ? '' : 'opacity-25 italic select-none']]),
                  style: W(l.style),
                  note: p.value || D.placeholder,
                  'note-html': (M = c(h)) == null ? void 0 : M.noteHTML,
                  'clicks-context': D.clicksContext,
                  'auto-scroll': !D.autoHeight,
                  highlight: l.highlight,
                  onMarkerClick: m[0] || (m[0] = (g, H) => y('markerClick', g, H)),
                  onMarkerDblclick: m[1] || (m[1] = (g, H) => y('markerDblclick', g, H)),
                },
                null,
                8,
                ['class', 'style', 'note', 'note-html', 'clicks-context', 'auto-scroll', 'highlight'],
              ))
        }
      )
    },
  }),
  He = { class: 'h-screen w-screen of-hidden flex' },
  Ne = { class: 'grid grid-rows-[auto_max-content] border-r border-main select-none max-h-full h-full' },
  Be = { class: 'relative' },
  Te = {
    class:
      'absolute left-0 top-0 bottom-0 w-200 flex flex-col flex-auto items-end group p2 gap-1 max-h-full of-x-visible of-y-auto',
    style: { direction: 'rtl' },
  },
  Ae = ['onClick'],
  Ie = { p2: '', border: 't main' },
  Ve = { class: 'select-none w-13 text-right my4 flex flex-col gap-1 items-end' },
  Ke = { class: 'text-3xl op20 mb2' },
  We = ['onDblclick'],
  ze = { class: 'py3 mt-0.5 mr--8 ml--4 op0 transition group-hover:op100' },
  Le = { key: 0, class: 'select-none absolute bottom-0 right-0 bg-main rounded-tl p2 op35 text-xs' },
  Oe = { class: 'absolute top-0 right-0 px3 py1.5 border-b border-l rounded-lb bg-main border-main select-none' },
  Re = { class: 'text-xs op50' },
  O = 450,
  Ye = Q({
    __name: 'overview',
    setup(D) {
      he({ title: `Overview - ${ke}` })
      const { openInEditor: R, slides: l } = ge(),
        y = pe(new Map()),
        r = B([]),
        h = B(null),
        $ = L(() =>
          l.value.map(t => {
            var e, o
            return a(((o = (e = t.meta) == null ? void 0 : e.slide) == null ? void 0 : o.note) || '')
          }),
        ),
        p = L(() => $.value.reduce((t, e) => t + e, 0)),
        E = L(() => l.value.map(t => T(t)).reduce((t, e) => t + e, 0)),
        _ = fe(),
        d = new WeakMap()
      function b(t) {
        return (d.has(t) || d.set(t, _e(t, G)), d.get(t))
      }
      function T(t) {
        var e, o
        return ((e = t.meta) == null ? void 0 : e.clicks) || ((o = b(t)) == null ? void 0 : o.total)
      }
      function z(t) {
        _.value === t ? (_.value = void 0) : (_.value = t)
      }
      function a(t) {
        const e =
            /[\w`'\-\u0392-\u03C9\u00C0-\u00FF\u0600-\u06FF\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3040-\u309F\uAC00-\uD7AF]+/g,
          o = t.match(e)
        let f = 0
        if (!o) return 0
        for (let F = 0; F < o.length; F++) o[F].charCodeAt(0) >= 19968 ? (f += o[F].length) : (f += 1)
        return f
      }
      function m(t) {
        const e = t.getBoundingClientRect(),
          o = 20
        return (
          e.top >= 0 - o &&
          e.left >= 0 - o &&
          e.bottom <= (window.innerHeight || document.documentElement.clientHeight) + o &&
          e.right <= (window.innerWidth || document.documentElement.clientWidth) + o
        )
      }
      function M() {
        const t = []
        ;(Array.from(y.entries()).forEach(([e, o]) => {
          m(o) && t.push(e)
        }),
          (r.value = t))
      }
      function g(t) {
        const e = document.createElement('a')
        ;((e.target = '_blank'), (e.href = ye + t.slice(1)), e.click())
      }
      function H(t) {
        const e = y.get(t)
        e && e.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      function Z(t, e, o) {
        const f = b(o)
        ;(f.current === e ? (f.current = G) : (f.current = e), t.preventDefault())
      }
      return (
        ve(() => {
          Y(() => {
            M()
          })
        }),
        (t, e) => {
          const o = te,
            f = ne,
            F = oe,
            ee = le
          return (
            i(),
            x('div', He, [
              s('nav', Ne, [
                s('div', Be, [
                  s('div', Te, [
                    (i(!0),
                    x(
                      q,
                      null,
                      X(c(l), (n, v) => {
                        var u, A, P, U
                        return (
                          i(),
                          x('div', { key: n.no, class: 'relative', style: { direction: 'ltr' } }, [
                            s(
                              'button',
                              {
                                class: S([
                                  'relative transition duration-300 w-8 h-8 rounded hover:bg-active hover:op100',
                                  r.value.includes(v) ? 'op100 text-primary bg-gray:5' : 'op20',
                                ]),
                                onClick: Pe => H(v),
                              },
                              [s('div', null, w(v + 1), 1)],
                              10,
                              Ae,
                            ),
                            (A = (u = n.meta) == null ? void 0 : u.slide) != null && A.title
                              ? (i(),
                                x(
                                  'div',
                                  {
                                    key: 0,
                                    class: S([
                                      'pointer-events-none select-none absolute left-110% backdrop-blur-8 top-50% translate-y--50% ws-nowrap z-10 px2 shadow-xl rounded border border-main transition duration-400 op0 group-hover:op100',
                                      r.value.includes(v) ? 'text-primary' : 'text-main important-text-op-50',
                                    ]),
                                  },
                                  w((U = (P = n.meta) == null ? void 0 : P.slide) == null ? void 0 : U.title),
                                  3,
                                ))
                              : I('v-if', !0),
                          ])
                        )
                      }),
                      128,
                    )),
                  ]),
                ]),
                s('div', Ie, [
                  c(be)
                    ? (i(),
                      k(
                        K,
                        { key: 1, title: c(V) ? 'Dark mode' : 'Light mode', 'pointer-events-none': '', op50: '' },
                        { default: N(() => [c(V) ? (i(), k(o, { key: 0 })) : (i(), k(f, { key: 1 }))]), _: 1 },
                        8,
                        ['title'],
                      ))
                    : (i(),
                      k(
                        K,
                        {
                          key: 0,
                          title: c(V) ? 'Switch to light mode theme' : 'Switch to dark mode theme',
                          onClick: e[0] || (e[0] = n => c(xe)()),
                        },
                        { default: N(() => [c(V) ? (i(), k(o, { key: 0 })) : (i(), k(f, { key: 1 }))]), _: 1 },
                        8,
                        ['title'],
                      )),
                ]),
              ]),
              s(
                'main',
                {
                  class: 'flex-1 h-full of-auto',
                  style: W(`grid-template-columns: repeat(auto-fit,minmax(${O}px,1fr))`),
                  onScroll: M,
                },
                [
                  (i(!0),
                  x(
                    q,
                    null,
                    X(
                      c(l),
                      (n, v) => (
                        i(),
                        x(
                          'div',
                          {
                            key: n.no,
                            ref_for: !0,
                            ref: u => y.set(v, u),
                            class: S([
                              'relative border-t border-main of-hidden flex gap-4 min-h-50 group',
                              v === 0 ? 'pt5' : '',
                            ]),
                          },
                          [
                            s('div', Ve, [
                              s('div', Ke, w(v + 1), 1),
                              C(
                                K,
                                {
                                  class: 'mr--3 op0 group-hover:op80',
                                  title: 'Play in new tab',
                                  onClick: u => g(c(J)(n, !1)),
                                },
                                { default: N(() => [C(F)]), _: 2 },
                                1032,
                                ['onClick'],
                              ),
                              I('v-if', !0),
                            ]),
                            s(
                              'div',
                              { class: 'flex flex-col gap-2 my5', style: W({ width: `${O}px` }) },
                              [
                                s(
                                  'div',
                                  {
                                    class: 'border rounded border-main overflow-hidden bg-main select-none h-max',
                                    onDblclick: u => g(c(J)(n, !1)),
                                  },
                                  [
                                    (i(),
                                    k(
                                      Se,
                                      { key: n.no, width: O, class: 'pointer-events-none important:[&_*]:select-none' },
                                      {
                                        default: N(() => [
                                          C(
                                            $e,
                                            { 'clicks-context': b(n), route: n, 'render-context': 'overview' },
                                            null,
                                            8,
                                            ['clicks-context', 'route'],
                                          ),
                                          C(Fe, { page: n.no }, null, 8, ['page']),
                                        ]),
                                        _: 2,
                                      },
                                      1024,
                                    )),
                                  ],
                                  40,
                                  We,
                                ),
                                T(n)
                                  ? (i(),
                                    k(
                                      Ce,
                                      {
                                        key: 0,
                                        active: _.value === n,
                                        'clicks-context': b(n),
                                        class: 'w-full mt-2',
                                        onDblclick: u => z(n),
                                        onClick: u => (_.value = n),
                                      },
                                      null,
                                      8,
                                      ['active', 'clicks-context', 'onDblclick', 'onClick'],
                                    ))
                                  : I('v-if', !0),
                              ],
                              4,
                            ),
                            s('div', ze, [
                              C(
                                K,
                                {
                                  title: 'Edit Note',
                                  class: S(['rounded-full w-9 h-9 text-sm', h.value === n.no ? 'important:op0' : '']),
                                  onClick: u => (h.value = n.no),
                                },
                                { default: N(() => [C(ee)]), _: 2 },
                                1032,
                                ['class', 'onClick'],
                              ),
                            ]),
                            C(
                              Me,
                              {
                                no: n.no,
                                class: 'max-w-250 w-250 text-lg rounded p3',
                                'auto-height': !0,
                                highlight: _.value === n,
                                editing: h.value === n.no,
                                'clicks-context': b(n),
                                onDblclick: u => (h.value !== n.no ? (h.value = n.no) : null),
                                'onUpdate:editing': e[1] || (e[1] = u => (h.value = null)),
                                onMarkerClick: (u, A) => Z(u, A, n),
                              },
                              null,
                              8,
                              ['no', 'highlight', 'editing', 'clicks-context', 'onDblclick', 'onMarkerClick'],
                            ),
                            $.value[v] > 0 ? (i(), x('div', Le, w($.value[v]) + ' words ', 1)) : I('v-if', !0),
                          ],
                          2,
                        )
                      ),
                    ),
                    128,
                  )),
                ],
                36,
              ),
              s('div', Oe, [
                s(
                  'div',
                  Re,
                  w(c(l).length) + ' slides · ' + w(E.value + c(l).length - 1) + ' clicks · ' + w(p.value) + ' words ',
                  1,
                ),
              ]),
            ])
          )
        }
      )
    },
  })
export { Ye as default }
